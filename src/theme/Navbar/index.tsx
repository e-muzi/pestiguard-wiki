/**
 * Custom MUI-based Navbar: brand left, navigation links right.
 */

import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig, type NavbarItem } from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import IconMenu from '@theme/Icon/Menu';

const NAVBAR_COLORS = {
  background: '#D2DCB6',
  hover: '#778873',
  brand: '#778873',
};

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
        backgroundColor: 'rgba(0,0,0,0.25)',
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
      <AppBar
        ref={navbarRef}
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: NAVBAR_COLORS.background,
          backdropFilter: 'saturate(180%) blur(12px)',
          borderBottom: '1px solid rgba(119, 136, 115, 0.15)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
          transform:
          hideOnScroll && !isNavbarVisible
            ? 'translate3d(0, -100%, 0)'
            : 'none',
          transition: 'transform 0.25s ease',
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: 60, sm: 72 },
            px: { xs: 2, sm: 2.5 },
            py: 0,
          }}
        >
          {/* Left: mobile toggle (only on small screens) + brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                  minWidth: 40,
                  color: NAVBAR_COLORS.brand,
                  '&:hover': {
                    backgroundColor: 'rgba(119, 136, 115, 0.12)',
                    color: NAVBAR_COLORS.hover,
                  },
                }}
              >
                <IconMenu />
              </Button>
            )}
            <Link to={useBaseUrl('/')} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontWeight: 700,
                  color: NAVBAR_COLORS.brand,
                  letterSpacing: '-0.02em',
                  '&:hover': {
                    color: NAVBAR_COLORS.hover,
                  },
                }}
              >
                {title ?? 'PestiGuard'}
              </Typography>
            </Link>
          </Box>

          {/* Right: nav links + color mode toggle */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.25,
            }}
          >
            {linkItems.map((item, i) => (
              <Button
                key={i}
                component={Link}
                to={useBaseUrl(item.to)}
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  color: NAVBAR_COLORS.brand,
                  px: 1.25,
                  py: 0.75,
                  borderRadius: 1,
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: 'rgba(119, 136, 115, 0.12)',
                    color: NAVBAR_COLORS.hover,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ ml: 0.5 }}>
              <NavbarColorModeToggle />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <NavbarBackdrop
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
        style={{ display: mobileSidebar.shown ? undefined : 'none' }}
      />
      <NavbarMobileSidebar />
    </nav>
  );
}
