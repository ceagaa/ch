"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { BackToTopIcon } from "@/components/sites/html-aqlova-com-27e9f18f/shared/icons";

export function PageEffects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    let stopRaf: (() => void) | undefined;
    if (!prefersReduced) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      let rafId: number;
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      stopRaf = () => cancelAnimationFrame(rafId);
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let cleanupCursor: (() => void) | undefined;
    if (finePointer && !prefersReduced) {
      document.body.classList.add("tp-magic-cursor");
      const ball = document.createElement("div");
      ball.id = "ball";
      document.body.appendChild(ball);

      let mouseX = -100;
      let mouseY = -100;
      let ballX = -100;
      let ballY = -100;
      let hovering = false;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        const target = e.target as HTMLElement | null;
        const interactive = target?.closest("a, button, [role='button'], .cs-blog-tag");
        if (interactive && !hovering) {
          hovering = true;
          ball.style.width = "44px";
          ball.style.height = "44px";
        } else if (!interactive && hovering) {
          hovering = false;
          ball.style.width = "12px";
          ball.style.height = "12px";
        }
      };
      window.addEventListener("mousemove", onMouseMove);

      let rafId: number;
      const animate = () => {
        ballX += (mouseX - ballX) * 0.18;
        ballY += (mouseY - ballY) * 0.18;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);

      cleanupCursor = () => {
        window.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(rafId);
        document.body.classList.remove("tp-magic-cursor");
        ball.remove();
      };
    }

    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      lenis?.destroy();
      stopRaf?.();
      cleanupCursor?.();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className={`back-to-top-wrapper${showTop ? " back-to-top-btn-show" : ""}`}>
        <button
          id="back_to_top"
          type="button"
          aria-label="Voltar ao topo"
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BackToTopIcon width={12} height={15} />
        </button>
      </div>
    </>
  );
}
