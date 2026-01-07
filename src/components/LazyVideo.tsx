"use client";

import { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
    src: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    poster?: string;
    width?: number;
    height?: number;
}

export default function LazyVideo({
    src,
    className = "",
    autoPlay = true,
    muted = true,
    loop = true,
    poster,
    width,
    height,
}: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(video);
                    }
                });
            },
            {
                rootMargin: "200px", // Start loading 200px before visible
                threshold: 0,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible && videoRef.current && !hasLoaded) {
            setHasLoaded(true);
            if (autoPlay) {
                videoRef.current.play().catch(() => {
                    // Autoplay might be blocked, that's okay
                });
            }
        }
    }, [isVisible, autoPlay, hasLoaded]);

    return (
        <video
            ref={videoRef}
            className={className}
            autoPlay={false}
            muted={muted}
            loop={loop}
            playsInline
            preload="none"
            poster={poster}
            width={width}
            height={height}
        >
            {isVisible && <source src={src} type="video/mp4" />}
        </video>
    );
}
