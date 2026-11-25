import React, { useRef, useState, useEffect } from 'react';

export default function Tilt3DCard({ children, className = '', glowColor = 'rgba(0, 240, 255, 0.18)' }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-triggered 3D entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`);
    setSpot({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setSpot((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isVisible
          ? transform
          : 'perspective(1000px) rotateX(14deg) translateY(45px) scale3d(0.95, 0.95, 0.95)',
        opacity: isVisible ? 1 : 0,
        transition: spot.opacity
          ? 'transform 0.08s ease-out, opacity 0.6s ease-out'
          : 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease-out',
        transformStyle: 'preserve-3d'
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic 3D Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(circle 240px at ${spot.x}% ${spot.y}%, ${glowColor}, transparent 80%)`
        }}
      />
      <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}