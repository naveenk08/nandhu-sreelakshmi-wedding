import { useRef, useState, useEffect, useCallback } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) setIsVisible(true);
    },
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(handleIntersect, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [handleIntersect, threshold]);

  return { ref, isVisible };
}
