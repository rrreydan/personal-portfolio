import { RefObject, useEffect, useState } from 'react';

// Tracking the appearance of an element on the screen to play the animation
export default function useVisibility(ref: RefObject<HTMLElement>): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return isVisible;
}
