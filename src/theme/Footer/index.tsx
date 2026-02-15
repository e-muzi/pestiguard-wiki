/**
 * Organic-styled footer: stone background, timber border, Fraunces/Nunito, moss accent.
 */

import React, { type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Box, Container, Typography } from '@mui/material';
import Link from '@docusaurus/Link';
import { Leaf } from 'lucide-react';
import { colors, typography } from '../design-tokens';

export default function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) return null;

  const { copyright } = footer;
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 6,
        px: { xs: 2, sm: 3 },
        bgcolor: colors.muted,
        borderTop: `1px solid ${colors.border}80`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: colors.primary,
              color: colors.primaryForeground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Leaf size={22} strokeWidth={2} />
          </Box>
          <Typography
            component="span"
            sx={{
              fontFamily: typography.fontFamilyHeading,
              fontWeight: 700,
              fontSize: '1.125rem',
              color: colors.foreground,
              '&:hover': { color: colors.primary },
              transition: 'color 0.2s ease',
            }}
          >
            PestiGuard
          </Typography>
        </Link>

        <Typography
          variant="body2"
          sx={{
            fontFamily: typography.fontFamilyBody,
            color: colors.mutedForeground,
            fontSize: '0.875rem',
          }}
        >
          {copyright ?? `Copyright © ${year} PestiGuard.`}
        </Typography>
      </Container>
    </Box>
  );
}
