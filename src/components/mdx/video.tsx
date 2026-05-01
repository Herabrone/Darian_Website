"use client";

import { useEffect, useRef } from "react";

export function Video({
  src,
  poster,
  caption,
  aspect = "16/10",
}: {
  src: string;
  poster?: string;
  caption?: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        el.pause();
        el.removeAttribute("autoplay");
      } else {
        el.play().catch(() => {});
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <figure className="my-8">
      <div
        className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
        style={{ aspectRatio: aspect }}
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-[13px] text-[var(--color-fg-subtle)]">{caption}</figcaption>
      )}
    </figure>
  );
}
