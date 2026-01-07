"use client";

import { useRef, useEffect, useState } from "react";

interface LazyIframeProps {
    src: string;
    title: string;
    className?: string;
    allow?: string;
    allowFullScreen?: boolean;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    width?: number;
    height?: number;
}

export default function LazyIframe({
    src,
    title,
    className = "",
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen = true,
    referrerPolicy = "strict-origin-when-cross-origin",
    width,
    height,
}: LazyIframeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(container);
                    }
                });
            },
            {
                rootMargin: "200px",
                threshold: 0,
            }
        );

        observer.observe(container);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className={className} style={{ width, height }}>
            {isVisible ? (
                <iframe
                    src={src}
                    title={title}
                    className={className}
                    allow={allow}
                    allowFullScreen={allowFullScreen}
                    referrerPolicy={referrerPolicy}
                    loading="lazy"
                    width={width}
                    height={height}
                />
            ) : (
                <div
                    className={`${className} bg-gray-200 flex items-center justify-center`}
                    style={{ width, height }}
                >
                    <span className="text-gray-500">Loading...</span>
                </div>
            )}
        </div>
    );
}
