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
                rootMargin: "200px",
                threshold: 0,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Handle video loading and playback when visible
    useEffect(() => {
        const video = videoRef.current;
        if (!isVisible || !video) return;

        // Set src directly on video element (works better on iOS than <source>)
        video.src = src;
        
        // iOS requires load() to be called after setting src
        video.load();

        if (autoPlay) {
            // Wait for video to be ready before playing
            const handleCanPlay = () => {
                video.play().catch(() => {
                    // Autoplay might be blocked, that's okay
                });
            };

            video.addEventListener("canplay", handleCanPlay, { once: true });
            
            return () => {
                video.removeEventListener("canplay", handleCanPlay);
            };
        }
    }, [isVisible, src, autoPlay]);

    return (
        <video
            ref={videoRef}
            className={className}
            muted={muted}
            loop={loop}
            playsInline
            preload="none"
            poster={poster}
            width={width}
            height={height}
        />
    );
}
