"use client";

import { Fragment, useEffect, useRef, type ElementType, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}

export function FadeIn({ children, delay = 0.3, as: Tag = "div", className = "" }: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              el.classList.add("is-visible");
            }, delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`tp-fade ${className}`.trim()}>
      {children}
    </Tag>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  as?: ElementType;
}

export function RevealText({ text, className = "", as: Tag = "h2" }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLElement>(".char");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            chars.forEach((char, i) => {
              window.setTimeout(() => char.classList.add("revealed"), 200 + i * 35);
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lines = text.split("\n").map((l) => l.trim());
  return (
    <Tag ref={ref} className={`reveal-text ${className}`.trim()}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          <span style={{ display: "inline-block" }}>
            {line.split(" ").map((word, w, arr) => (
              <span key={w}>
                <span className="word" style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                  {Array.from(word).map((ch, i) => (
                    <span key={i} className="char" style={{ display: "inline-block" }}>
                      {ch}
                    </span>
                  ))}
                </span>
                {w < arr.length - 1 ? " " : null}
              </span>
            ))}
          </span>
          {li < lines.length - 1 ? <br /> : null}
        </Fragment>
      ))}
    </Tag>
  );
}
