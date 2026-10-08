"use client";

import { useEffect, useRef } from "react";
import { SITE_ASSETS } from "@/components/sites/html-aqlova-com-27e9f18f/shared/icons";

export function BannerSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const sy = window.scrollY;
      const viewH = window.innerHeight;
      const topAbs = wrap.getBoundingClientRect().top + sy;
      const h = wrap.offsetHeight;
      const ty = -0.6 * (topAbs - sy + h / 2 - viewH / 2);
      const t = Math.min(
        1,
        Math.max(0, (sy - topAbs + viewH) / (h + viewH / 2))
      );
      const s = 1 + 0.15 * (1 - (1 - t) * (1 - t));
      img.style.transform = `translate(0px, ${ty}px) scale(${s})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="tp-banner-about-area">
      <div className="tp-container">
        <div className="tp-row">
          <div className="col-span-12">
            <div ref={wrapRef} className="tp-banner-about fix scale-up-img">
              <img ref={imgRef} className="img-cover scale-up" src={SITE_ASSETS.banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
