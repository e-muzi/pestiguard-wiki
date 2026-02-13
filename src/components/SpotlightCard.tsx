import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SpotlightCard({
  children,
  className = '',
  style = {},
}: SpotlightCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 16,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <motion.div
        style={{
          position: 'absolute',
          left: spotlight.x,
          top: spotlight.y,
          width: 280,
          height: 280,
          marginLeft: -140,
          marginTop: -140,
          background: `radial-gradient(circle, rgba(144, 171, 139, 0.25) 0%, rgba(90, 120, 99, 0.08) 40%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: spotlight.opacity,
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
      {children}
    </motion.div>
  );
}
