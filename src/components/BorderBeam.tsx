import React from 'react';
import { motion } from 'motion/react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  borderWidth?: number;
}

export default function BorderBeam({
  size = 80,
  duration = 6,
  delay = 0,
  colorFrom = '#90AB8B',
  colorTo = '#5A7863',
  className = '',
  borderWidth = 2,
}: BorderBeamProps): JSX.Element {
  return (
    <motion.div
      className={className}
      style={{
        position: 'absolute',
        inset: -borderWidth,
        borderRadius: 'inherit',
        padding: borderWidth,
        background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 180deg)`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    />
  );
}
