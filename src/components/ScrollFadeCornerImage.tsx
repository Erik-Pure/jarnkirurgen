"use client";

import { useEffect, useState } from "react";

type ScrollFadeCornerImageProps = {
  src: string;
  fadeDistance?: number;
  maxOpacity?: number;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function ScrollFadeCornerImage({
  src,
  fadeDistance = 460,
  maxOpacity = 1,
  className,
}: ScrollFadeCornerImageProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const next = clamp(1 - window.scrollY / fadeDistance, 0, 1);
      setOpacity(next * maxOpacity);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fadeDistance, maxOpacity]);

  return (
    <div className={className} style={{ opacity }}>
      <div
        className="absolute right-0 top-0 h-full w-[78%] bg-contain bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url('${src}')` }}
      />
      <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-l from-black/34 via-black/12 to-transparent" />
    </div>
  );
}
