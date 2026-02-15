/**
 * Organic design: sticky floating pill nav with glassmorphism and Lucide logo.
 */

import React from 'react';
import clsx from 'clsx';
import { Box, Typography, Button } from '@mui/material';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig, type NavbarItem } from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import IconMenu from '@theme/Icon/Menu';
import { Leaf } from 'lucide-react';
import { colors, shadows } from '../design-tokens';

function NavbarBackdrop({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={className}
      style={{
        ...props.style,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(44, 44, 36, 0.2)',
        zIndex: 1040,
      }}
    />
  );
}

export default function Navbar(): JSX.Element {
  const {
    navbar: { hideOnScroll, title },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const linkItems = useThemeConfig().navbar.items.filter(
    (item): item is NavbarItem & { to: string; label: string } =>
      item.type !== 'search' &&
      typeof (item as { to?: string }).to === 'string' &&
      typeof (item as { label?: string }).label === 'string'
  );

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        mobileSidebar.shown && 'navbar-sidebar--show'
      )}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          pt: 2,
          px: { xs: 2, sm: 3 },
          transform:
            hideOnScroll && !isNavbarVisible
              ? 'translate3d(0, -100%, 0)'
              : 'none',
          transition: 'transform 0.3s ease',
        }}
      >
        <Box
          ref={navbarRef}
          sx={{
            maxWidth: 960,
            margin: '0 auto',
            borderRadius: 9999,
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: `1px solid ${colors.border}80`,
            boxShadow: shadows.soft,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 56,
            px: { xs: 1.5, sm: 2 },
            py: 0.5,
          }}
        >
          {/* Left: mobile toggle + logo + brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {!mobileSidebar.disabled && (
              <Button
                onClick={mobileSidebar.toggle}
                aria-label={translate({
                  id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
                  message: 'Toggle navigation bar',
                  description: 'The ARIA label for hamburger menu button of mobile navigation',
                })}
                aria-expanded={mobileSidebar.shown}
                sx={{
                  display: { xs: 'inline-flex', md: 'none' },
                  minWidth: 48,
                  minHeight: 48,
                  color: colors.primary,
                  borderRadius: 9999,
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  '&:hover': {
                    backgroundColor: `${colors.primary}18`,
                    color: colors.primary,
                  },
                  '&:active': {
                    backgroundColor: `${colors.primary}22`,
                  },
                }}
              >
                <IconMenu />
              </Button>
            )}
            <Link to={useBaseUrl('/')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: colors.primary,
                  color: colors.primaryForeground,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Leaf size={22} strokeWidth={2} />
              </Box>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 700,
                  color: colors.foreground,
                  letterSpacing: '-0.02em',
                  fontSize: '1.125rem',
                  '&:hover': {
                    color: colors.primary,
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                {title ?? 'PestiGuard'}
              </Typography>
            </Link>
          </Box>

          {/* Right: nav links + color mode toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
            {linkItems.map((item, i) => (
              <Button
                key={i}
                component={Link}
                to={useBaseUrl(item.to)}
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  color: colors.foreground,
                  px: 2,
                  py: 1,
                  borderRadius: 9999,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: `${colors.primary}14`,
                    color: colors.primary,
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <NavbarBackdrop
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
        style={{ display: mobileSidebar.shown ? undefined : 'none' }}
      />
      <NavbarMobileSidebar />
    </nav>
  );
}
