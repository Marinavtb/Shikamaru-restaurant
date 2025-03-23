import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".story-block h2");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 } // Déclenche l'animation quand 50% du h2 est visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}

export default useScrollAnimation;
