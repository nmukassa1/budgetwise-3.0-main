"use client"
import { useState, useEffect } from 'react';

export function useBreakpointChange(breakpoint = 768) {
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // if (typeof window === 'undefined') return;

        const handleResize = () => {
            const nowMobile = window.innerWidth < breakpoint;
            if (nowMobile !== isMobile) {
                
                setIsLoading(true); // Start loading screen
                setTimeout(() => setIsLoading(false), 500); // End loading after delay (e.g., 500ms)
            }
            setIsMobile(nowMobile);
        };

        handleResize()

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile, breakpoint]);

    return { isLoading, isMobile };
}