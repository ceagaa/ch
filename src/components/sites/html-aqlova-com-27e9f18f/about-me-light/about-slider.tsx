"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SITE_ASSETS } from "@/components/sites/html-aqlova-com-27e9f18f/shared/icons";

const driftPct = (y: number) =>
  -15.9128 - 0.047861 * y + 3.1626e-6 * y * y;

export function AboutSlider() {
  const areaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const pct = driftPct(window.scrollY).toFixed(4);
      area
        .querySelectorAll<HTMLElement>(".about-me-slider-thumb")
        .forEach((t) => {
          t.style.transform = `translate3d(${pct}%, 0, 0)`;
        });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={areaRef} className="about-me-slider-area pt-120 p-relative">
      <Swiper
        className="about-me-slider-active"
        slidesPerView={2}
        loop
        spaceBetween={30}
        a11y={false}
        breakpoints={{
          992: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {SITE_ASSETS.aboutThumbs.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="about-me-slider-thumb tp-item-anime marque">
              <img className="w-full" src={src} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
