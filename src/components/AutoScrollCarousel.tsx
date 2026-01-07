"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface AutoScrollCarouselProps {
    children: ReactNode;
    speed?: number; // pixels per second
}

export default function AutoScrollCarousel({ children, speed = 50 }: AutoScrollCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const firstSetRef = useRef<HTMLDivElement>(null);
    const isUserScrollingRef = useRef(false);
    const userScrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const positionRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);
    const touchStartXRef = useRef<number>(0);
    const touchStartYRef = useRef<number>(0);
    const isTouchScrollingRef = useRef(false);
    const [setWidth, setSetWidth] = useState(0);
    const [copies, setCopies] = useState(1);
    const [shouldScroll, setShouldScroll] = useState(false);

    // Measure widths and calculate how many copies we need
    useEffect(() => {
        let measureTimeout: NodeJS.Timeout | null = null;
        
        const measure = () => {
            if (firstSetRef.current && containerRef.current) {
                const contentWidth = firstSetRef.current.offsetWidth;
                const containerWidth = containerRef.current.offsetWidth;
                
                // Guard against invalid measurements during scroll/layout shifts
                if (contentWidth <= 0 || containerWidth <= 0) {
                    return;
                }
                
                // Only scroll if content is wider than container
                if (contentWidth > containerWidth) {
                    const widthWithGap = contentWidth + 8; // +8 for gap
                    const neededCopies = Math.ceil(containerWidth / widthWithGap) + 2;
                    // Cap at reasonable maximum to prevent memory issues
                    setCopies(Math.min(Math.max(2, neededCopies), 10));
                    setSetWidth(widthWithGap);
                    setShouldScroll(true);
                } else {
                    // Content fits, no scrolling needed
                    setCopies(1);
                    setSetWidth(0);
                    setShouldScroll(false);
                    // Reset position if we were scrolling before
                    if (trackRef.current) {
                        trackRef.current.style.transform = '';
                    }
                    positionRef.current = 0;
                }
            }
        };
        
        // Debounced measure to avoid rapid re-measurements
        const debouncedMeasure = () => {
            if (measureTimeout) clearTimeout(measureTimeout);
            measureTimeout = setTimeout(measure, 50);
        };

        measure();
        window.addEventListener('resize', debouncedMeasure);
        
        // Re-measure after images might have loaded
        const timeouts = [
            setTimeout(measure, 100),
            setTimeout(measure, 500),
            setTimeout(measure, 1000),
        ];
        
        return () => {
            window.removeEventListener('resize', debouncedMeasure);
            timeouts.forEach(clearTimeout);
            if (measureTimeout) clearTimeout(measureTimeout);
        };
    }, [children]);

    // Animation loop - infinite scroll to the left
    useEffect(() => {
        const track = trackRef.current;
        if (!track || !shouldScroll || setWidth <= 0) return;

        let animationId: number;
        let isRunning = true;

        const animate = (currentTime: number) => {
            if (!isRunning) return;
            
            if (lastTimeRef.current === 0) {
                lastTimeRef.current = currentTime;
                animationId = requestAnimationFrame(animate);
                return;
            }

            const deltaTime = (currentTime - lastTimeRef.current) / 1000;
            lastTimeRef.current = currentTime;
            
            // Guard against extreme deltaTime (e.g., tab was backgrounded)
            if (deltaTime > 0.1) {
                animationId = requestAnimationFrame(animate);
                return;
            }

            if (!isUserScrollingRef.current) {
                positionRef.current += speed * deltaTime;

                // Ensure position stays valid
                if (!Number.isFinite(positionRef.current)) {
                    positionRef.current = 0;
                }

                // Seamless reset using modulo
                if (positionRef.current >= setWidth) {
                    positionRef.current = positionRef.current % setWidth;
                }

                track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            isRunning = false;
            cancelAnimationFrame(animationId);
            lastTimeRef.current = 0;
        };
    }, [speed, setWidth, shouldScroll]);

    const pauseAutoScroll = () => {
        isUserScrollingRef.current = true;

        if (userScrollTimeout.current) {
            clearTimeout(userScrollTimeout.current);
        }

        userScrollTimeout.current = setTimeout(() => {
            isUserScrollingRef.current = false;
        }, 2000);
    };

    // Handle wheel scrolling - only respond to horizontal scroll
    const handleWheel = (e: React.WheelEvent) => {
        if (!shouldScroll) return;
        
        // Only intercept horizontal scrolling, let vertical scroll pass through
        if (e.deltaX === 0) return;
        
        e.preventDefault();
        pauseAutoScroll();
        
        positionRef.current += e.deltaX;
        
        // Wrap around for infinite scroll
        if (setWidth > 0) {
            positionRef.current = ((positionRef.current % setWidth) + setWidth) % setWidth;
        }
        
        if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
        }
    };

    // Handle touch start
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!shouldScroll) return;
        if (!e.touches[0]) return; // Guard against missing touch data
        
        touchStartXRef.current = e.touches[0].clientX;
        touchStartYRef.current = e.touches[0].clientY;
        isTouchScrollingRef.current = false;
        isUserScrollingRef.current = true;
    };

    // Handle touch move
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!shouldScroll) return;
        if (!e.touches[0]) return; // Guard against missing touch data
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = touchStartXRef.current - touchX;
        const deltaY = touchStartYRef.current - touchY;

        // Guard against NaN or extreme values
        if (!Number.isFinite(deltaX) || !Number.isFinite(deltaY)) {
            return;
        }

        // Determine if this is a horizontal or vertical swipe
        // Only on first significant movement
        if (!isTouchScrollingRef.current && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
            // If more horizontal than vertical, handle it
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                isTouchScrollingRef.current = true;
            } else {
                // Vertical scroll - let it pass through completely
                isUserScrollingRef.current = false;
                isTouchScrollingRef.current = false;
                return;
            }
        }

        if (isTouchScrollingRef.current) {
            e.preventDefault();
            
            // Clamp deltaX to prevent extreme jumps
            const clampedDelta = Math.max(-100, Math.min(100, deltaX));
            positionRef.current += clampedDelta;
            touchStartXRef.current = touchX;
            touchStartYRef.current = touchY;
            
            // Wrap around for infinite scroll
            if (setWidth > 0) {
                positionRef.current = ((positionRef.current % setWidth) + setWidth) % setWidth;
            }
            
            if (trackRef.current) {
                trackRef.current.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
            }
        }
    };

    // Handle touch end
    const handleTouchEnd = () => {
        if (!shouldScroll) return;
        isTouchScrollingRef.current = false;
        pauseAutoScroll();
    };

    // Generate the required number of copies
    const renderCopies = () => {
        const elements = [];
        for (let i = 0; i < copies; i++) {
            elements.push(
                <div 
                    key={i} 
                    ref={i === 0 ? firstSetRef : undefined} 
                    className="flex gap-x-2 shrink-0"
                >
                    {children}
                </div>
            );
        }
        return elements;
    };

    return (
        <div
            ref={containerRef}
            className="overflow-hidden touch-pan-y"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => { if (shouldScroll) isUserScrollingRef.current = true; }}
            onMouseUp={() => { if (shouldScroll) pauseAutoScroll(); }}
        >
            <div
                ref={trackRef}
                className="flex gap-x-2"
                style={shouldScroll ? { willChange: 'transform' } : undefined}
            >
                {renderCopies()}
            </div>
        </div>
    );
}
