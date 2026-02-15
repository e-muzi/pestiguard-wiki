import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { Box, Container, Typography } from '@mui/material';
import Link from '@docusaurus/Link';
import { motion } from 'motion/react';
import { Dna, Box as BoxIcon, Smartphone } from 'lucide-react';
import { colors, shadows, cardRadii, organicRadii, typography } from '../theme/design-tokens';

type LayoutProps = React.ComponentProps<typeof Layout> & {
  title?: string;
  description?: string;
};

const FEATURE_TRIO = [
  {
    to: '/project-description',
    label: 'Biosensor Circuit',
    description: 'Synthetic genetic circuit and RNA aptamers for pesticide detection.',
    Icon: Dna,
  },
  {
    to: '/hardware',
    label: 'Hardware',
    description: 'SmartBox: 3D-printed optical darkroom and smartphone capture.',
    Icon: BoxIcon,
  },
  {
    to: '/software',
    label: 'Software',
    description: 'BioAP platform: computer vision and instant safety results.',
    Icon: Smartphone,
  },
];

/** Ambient blob backgrounds with organic shapes and blur */
function BlobBackgrounds() {
  const blobs = [
    { color: colors.primary, opacity: 0.12, size: 420, x: '5%', y: '10%', radius: organicRadii[0] },
    { color: colors.secondary, opacity: 0.1, size: 360, x: '75%', y: '60%', radius: organicRadii[1] },
  ];
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {blobs.map((blob, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            borderRadius: blob.radius,
            backgroundColor: blob.color,
            opacity: blob.opacity,
            filter: 'blur(80px)',
          }}
        />
      ))}
    </Box>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const LayoutWithMeta = Layout as React.ComponentType<LayoutProps>;

export default function Home(): JSX.Element {
  return (
    <LayoutWithMeta
      title="Home"
      description="PestiGuard: An innovative biosensor for pesticide detection"
    >
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: '100vh' },
          overflow: 'hidden',
          bgcolor: colors.background,
          display: 'flex',
          alignItems: 'center',
          py: { xs: 4, sm: 5, md: 8 },
        }}
      >
        <BlobBackgrounds />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            py: { xs: 0, md: 2 },
            width: '100%',
            px: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
              gap: { xs: 4, sm: 5, lg: 5 },
              alignItems: 'center',
              width: '100%',
              maxWidth: { lg: 1280 },
              mx: { lg: 'auto' },
            }}
          >
            {/* Left: Headline + intro + feature cards */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2.5, sm: 3 },
                pr: { lg: 1 },
              }}
            >
              <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    fontFamily: typography.fontFamilyHeading,
                    fontWeight: 700,
                    color: colors.foreground,
                    mb: 1,
                    lineHeight: 1.2,
                    fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
                  }}
                >
                  PestiGuard.
                  <br />
                  Empowering you with food safety.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: typography.fontFamilyBody,
                    color: colors.mutedForeground,
                    maxWidth: { xs: '100%', md: 520 },
                    lineHeight: 1.65,
                    fontSize: { xs: '0.9375rem', sm: '1.05rem', md: '1.125rem' },
                  }}
                >
                  An innovative, all-in-one biosensor empowering consumers to
                  detect pesticide residues directly in food and soil with
                  laboratory precision.
                </Typography>
              </motion.div>

              {/* Mobile-only: image between intro and cards */}
              <Box
                sx={{
                  display: { xs: 'flex', lg: 'none' },
                  justifyContent: 'center',
                  my: 2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{
                    transform: 'rotate(-2deg)',
                    padding: 10,
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderRadius: 16,
                    boxShadow: shadows.soft,
                  }}
                >
                  <img
                    src="/assets/software_holding.PNG"
                    alt="Hand holding PestiGuard device with BioAP Analysis app"
                    style={{
                      maxHeight: 200,
                      width: 'auto',
                      objectFit: 'contain',
                      borderRadius: 10,
                    }}
                  />
                </motion.div>
              </Box>

              <Box
                component={motion.div}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                  gap: { xs: 2, sm: 2.5 },
                  mt: { xs: 0, sm: 1 },
                }}
              >
                {FEATURE_TRIO.map((item, index) => (
                  <motion.div
                    key={item.to}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35 },
                      },
                    }}
                  >
                    <Link
                      to={item.to}
                      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                    >
                      <Box
                        component={motion.div}
                        whileHover={{
                          y: -4,
                          transition: { duration: 0.3 },
                        }}
                        sx={{
                          height: '100%',
                          p: 3,
                          borderRadius: '2rem',
                          border: `1px solid ${colors.border}80`,
                          bgcolor: colors.card,
                          boxShadow: shadows.soft,
                          cursor: 'pointer',
                          transition: 'box-shadow 0.3s ease',
                          '&:hover': {
                            boxShadow: shadows.softHover,
                          },
                          ...cardRadii[index % cardRadii.length],
                        }}
                      >
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '1rem',
                            bgcolor: `${colors.primary}18`,
                            color: colors.primary,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 1.5,
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                            '&:hover': {
                              bgcolor: colors.primary,
                              color: colors.primaryForeground,
                            },
                          }}
                        >
                          <item.Icon size={28} strokeWidth={2} />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontFamily: typography.fontFamilyHeading,
                            fontWeight: 700,
                            color: colors.foreground,
                            mb: 0.75,
                            fontSize: { xs: '1.05rem', sm: '1.1rem' },
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.mutedForeground,
                            lineHeight: 1.55,
                            fontSize: { xs: '0.9375rem', sm: '1rem' },
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.primary,
                            fontWeight: 600,
                            mt: 1.5,
                            display: 'block',
                          }}
                        >
                          Read more →
                        </Typography>
                      </Box>
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </Box>

            {/* Right: Product image (desktop only) — shifted right for balance */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-start',
                pl: 20,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{
                  transform: 'rotate(-2deg)',
                  padding: 12,
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  borderRadius: '1.25rem',
                  boxShadow: shadows.soft,
                }}
              >
                <img
                  src="/assets/software_holding.PNG"
                  alt="Hand holding PestiGuard device with BioAP Analysis app"
                  style={{
                    maxHeight: 'min(65vh, 460px)',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: 10,
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>
    </LayoutWithMeta>
  );
}
