import React, { useState, useEffect, useRef } from 'react';

function ScrollReveal({ children, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-300 delay-700 ease-in-out  ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
      }`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
