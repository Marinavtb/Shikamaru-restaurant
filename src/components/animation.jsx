import { useEffect, useRef } from "react";

const Infos = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="infos" className="info" ref={sectionRef}>
      <div className="groupline">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </section>
  );
};

export default Infos;
