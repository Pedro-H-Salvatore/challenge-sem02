import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth";

      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
          behavior,
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
