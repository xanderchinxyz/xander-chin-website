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
    const [setWidth, setSetWidth] = useState(0);
    const [copies, setCopies] = useState(1);
    const [shouldScroll, setShouldScroll] = useState(false);

    // Measure widths and calculate how many copies we need
    useEffect(() => {
        const measure = () => {
            if (firstSetRef.current && containerRef.current) {
                const contentWidth = firstSetRef.current.offsetWidth;
                const containerWidth = containerRef.current.offsetWidth;
                
                // Only scroll if content is wider than container
                if (contentWidth > containerWidth) {
                    const widthWithGap = contentWidth + 8; // +8 for gap
                    const neededCopies = Math.ceil(containerWidth / widthWithGap) + 2;
                    setCopies(Math.max(2, neededCopies));
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

        measure();
        window.addEventListener('resize', measure);
        
        // Re-measure after images might have loaded
        const timeouts = [
            setTimeout(measure, 100),
            setTimeout(measure, 500),
            setTimeout(measure, 1000),
        ];
        
        return () => {
            window.removeEventListener('resize', measure);
            timeouts.forEach(clearTimeout);
        };
    }, [children]);

    // Animation loop - infinite scroll to the left
    useEffect(() => {
        const track = trackRef.current;
        if (!track || !shouldScroll || setWidth <= 0) return;

        let animationId: number;

        const animate = (currentTime: number) => {
            if (lastTimeRef.current === 0) {
                lastTimeRef.current = currentTime;
                animationId = requestAnimationFrame(animate);
                return;
            }

            const deltaTime = (currentTime - lastTimeRef.current) / 1000;
            lastTimeRef.current = currentTime;

            if (!isUserScrollingRef.current) {
                positionRef.current += speed * deltaTime;

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
            className="overflow-hidden"
            onWheel={handleWheel}
            onTouchStart={() => { if (shouldScroll) isUserScrollingRef.current = true; }}
            onTouchEnd={() => { if (shouldScroll) pauseAutoScroll(); }}
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
