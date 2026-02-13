import React from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps): JSX.Element {
  return (
    <div
      className={clsx('bento-grid', className)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: BentoCardProps): JSX.Element {
  return (
    <motion.div
      className={clsx('bento-card', className)}
      style={{
        gridColumn: colSpan === 1 ? 'auto' : `span ${colSpan}`,
        gridRow: rowSpan === 1 ? 'auto' : `span ${rowSpan}`,
        minHeight: rowSpan === 2 ? 240 : 180,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
