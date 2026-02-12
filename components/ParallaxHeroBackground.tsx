"use client";

import { useEffect, useState } from "react";

const PARALLAX_RATE = 0.35;

export function ParallaxHeroBackground({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const onScroll = () => setTranslateY(window.scrollY * PARALLAX_RATE);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className={className}
      style={{ transform: `translateY(${translateY}px)` }}
    />
  );
}
