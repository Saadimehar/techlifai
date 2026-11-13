import { useEffect } from "react";
import Lenis from "lenis";

let instance = null;

export const getLenis = () => instance;

export function useSmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
    instance = lenis;
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);
}

export function scrollToTarget(target, options = {}) {
  if (instance) {
    instance.scrollTo(target, { offset: -80, ...options });
  } else if (typeof target === "number") {
    window.scrollTo({ top: target, left: 0, behavior: "instant" });
  } else {
    target?.scrollIntoView({ behavior: "smooth" });
  }
}
