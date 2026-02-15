import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { colors, typography } from '../theme/design-tokens';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  /** Optional chips or extra content below subtitle */
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, icon, children }: PageHeroProps): JSX.Element {
  return (
    <Box
      sx={{
        bgcolor: colors.card,
        pt: { xs: 6, md: 8 },
        pb: { xs: 5, md: 6 },
        borderBottom: `1px solid ${colors.border}80`,
      }}
    >
      <Container maxWidth="md">
        {icon && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            {icon}
          </Box>
        )}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: typography.fontFamilyHeading,
            fontWeight: 700,
            color: colors.foreground,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{
              fontFamily: typography.fontFamilyBody,
              color: colors.mutedForeground,
              fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}
