"use client";

import { useState, useEffect, RefObject } from "react";

export function useInView(
    ref: RefObject<HTMLElement | null>,
    options?: { once?: boolean; amount?: number }
): boolean {
    const [isInView, setIsInView] = useState(false);
    const once = options?.once ?? true;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else if (!once) {
                    setIsInView(false);
                }
            },
            { threshold: options?.amount ?? 0.2, rootMargin: "0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [ref, once, options?.amount]);

    return isInView;
}
