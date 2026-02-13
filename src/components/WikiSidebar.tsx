import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/project-description', label: 'Project' },
  { to: '/development', label: 'Development' },
  { to: '/hardware', label: 'Hardware' },
  { to: '/software', label: 'Software' },
  { to: '/usage', label: 'Usage' },
  { to: '/contact', label: 'Contact' },
];

const containerVariants = {
  closed: { x: '-100%' },
  open: {
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

interface WikiSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function WikiSidebar({ isOpen, onClose, isMobile }: WikiSidebarProps): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '') || '/';

  return (
    <>
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="wiki-sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(59, 73, 83, 0.5)',
              zIndex: 1040,
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <motion.aside
        className={clsx('wiki-sidebar', isMobile && 'wiki-sidebar--mobile')}
        initial={false}
        animate={isMobile ? (isOpen ? 'open' : 'closed') : 'open'}
        variants={containerVariants}
        style={{
          position: isMobile ? 'fixed' : 'sticky',
          top: isMobile ? 0 : 'var(--ifm-navbar-height, 60px)',
          left: 0,
          width: 260,
          height: isMobile ? '100vh' : 'calc(100vh - var(--ifm-navbar-height, 60px))',
          zIndex: 1050,
          backgroundColor: 'var(--pestiguard-cream, #EBF4DD)',
          borderRight: '1px solid rgba(90, 120, 99, 0.2)',
          padding: '1.5rem 0.75rem',
          overflowY: 'auto',
          boxShadow: isMobile ? '4px 0 24px rgba(59, 73, 83, 0.15)' : 'none',
        }}
      >
        <nav className="wiki-sidebar-nav" aria-label="Wiki navigation">
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_ITEMS.map((item, index) => {
              const href = item.to === '/' ? '/' : item.to;
              const isActive =
                pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <motion.li
                  key={item.to}
                  variants={linkVariants}
                  style={{ position: 'relative', marginBottom: 4 }}
                >
                  <a
                    href={href}
                    onClick={isMobile ? onClose : undefined}
                    style={{
                      display: 'block',
                      position: 'relative',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 8,
                      color: 'var(--pestiguard-slate, #3B4953)',
                      textDecoration: 'none',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--pestiguard-forest, #5A7863)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isActive ? 'var(--pestiguard-slate, #3B4953)' : '';
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="wiki-sidebar-pill"
                        className="wiki-sidebar-pill"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 4,
                          borderRadius: '0 4px 4px 0',
                          backgroundColor: 'var(--pestiguard-forest, #5A7863)',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.aside>
    </>
  );
}
