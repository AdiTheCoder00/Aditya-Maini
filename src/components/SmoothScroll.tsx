"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import { gsap } from 'gsap';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    
    // Sync GSAP and Lenis tickers
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Disable GSAP lag smoothing to prevent fighting with Lenis
    gsap.ticker.lagSmoothing(0);
    
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, autoRaf: false }}>
      {children}
    </ReactLenis>
  );
}
