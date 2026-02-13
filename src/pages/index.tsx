import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { Box, Container, Typography, Paper } from '@mui/material';
import Link from '@docusaurus/Link';

type LayoutProps = React.ComponentProps<typeof Layout> & {
  title?: string;
  description?: string;
};
import { motion } from 'motion/react';
import Biotech from '@mui/icons-material/Biotech';
import SettingsInputComponent from '@mui/icons-material/SettingsInputComponent';
import Smartphone from '@mui/icons-material/Smartphone';

const PALETTE = {
  cream: '#F1F3E0',
  lightSage: '#D2DCB6',
  mutedGreen: '#A1BC98',
  darkSage: '#778873',
};

const FEATURE_TRIO = [
  {
    to: '/project-description',
    label: 'Biosensor Circuit',
    description: 'Synthetic genetic circuit and RNA aptamers for pesticide detection.',
    Icon: Biotech,
  },
  {
    to: '/hardware',
    label: 'Hardware',
    description: 'SmartBox: 3D-printed optical darkroom and smartphone capture.',
    Icon: SettingsInputComponent,
  },
  {
    to: '/software',
    label: 'Software',
    description: 'BioAP platform: computer vision and instant safety results.',
    Icon: Smartphone,
  },
];

/** Floating background orbs – exaggerated motion */
function FloatingBackground() {
  const orbs = [
    { size: 120, x: '8%', y: '15%', delay: 0, duration: 8 },
    { size: 80, x: '85%', y: '25%', delay: 1, duration: 10 },
    { size: 160, x: '75%', y: '70%', delay: 0.5, duration: 12 },
    { size: 60, x: '15%', y: '75%', delay: 2, duration: 7 },
    { size: 100, x: '50%', y: '50%', delay: 0.8, duration: 9 },
    { size: 90, x: '92%', y: '88%', delay: 1.5, duration: 11 },
    { size: 70, x: '5%', y: '45%', delay: 0.3, duration: 8 },
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
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${PALETTE.mutedGreen}99 0%, ${PALETTE.darkSage}88 40%, ${PALETTE.mutedGreen}55 70%, transparent 85%)`
          }}
          animate={{
            y: [0, -45, 30, -20, 0],
            x: [0, 25, -15, 20, 0],
            scale: [1, 1.15, 0.95, 1.1, 1],
            opacity: [0.65, 0.95, 0.55, 0.85, 0.65],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
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
          height: '100vh',
          minHeight: 600,
          maxHeight: '100dvh',
          overflow: 'hidden',
          bgcolor: PALETTE.cream,
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <FloatingBackground />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            py: 2,
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.85fr 0.8fr' },
              gap: 5,
              alignItems: 'center',
              width: '100%',
              minHeight: 0,
            }}
          >
            {/* Left: Slogan + Intro + 3 feature containers */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                maxHeight: '100%',
                overflow: 'visible',
                minWidth: 0,
                pr: { lg: 2 },
                position: 'relative',
                zIndex: 1,
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
                    fontWeight: 700,
                    color: PALETTE.darkSage,
                    mb: 1.5,
                    lineHeight: 1.2,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem', lg: '3rem' },
                  }}
                >
                  PestiGuard. 
                  <br />
                  Empowering you with food safety.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: PALETTE.darkSage,
                    maxWidth: 700,
                    lineHeight: 1.7,
                    fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
                  }}
                >
                  An innovative, all-in-one biosensor empowering consumers to
                  detect pesticide residues directly in food and soil with
                  laboratory precision.
                </Typography>
              </motion.div>

              {/* Feature Trio – directly under intro */}
              <Box
                component={motion.div}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(3, 1fr)',
                  },
                  gap: 3,
                  mt: 2,
                  alignItems: 'stretch',
                }}
              >
                {FEATURE_TRIO.map((item) => (
                  <Box key={item.to} sx={{ display: 'flex', minHeight: 0 }}>
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.35 },
                        },
                      }}
                      style={{ width: '100%', display: 'flex' }}
                    >
                      <Link to={item.to} style={{ textDecoration: 'none', flex: 1, display: 'flex', minWidth: 0 }}>
                        <motion.div
                          whileHover={{
                            y: -6,
                            scale: 1.04,
                            transition: { duration: 0.2 },
                          }}
                          style={{ flex: 1, display: 'flex', minWidth: 0 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 3,
                              borderRadius: 2.5,
                              border: `2px solid ${PALETTE.mutedGreen}`,
                              bgcolor: PALETTE.cream,
                              cursor: 'pointer',
                              transition: 'box-shadow 0.2s ease',
                              height: '100%',
                              minHeight: 180,
                              display: 'flex',
                              flexDirection: 'column',
                              '&:hover': {
                                boxShadow: `0 12px 32px rgba(119, 136, 115, 0.18)`,
                              },
                            }}
                          >
                            <item.Icon
                              sx={{
                                fontSize: 44,
                                color: PALETTE.mutedGreen,
                                mb: 1,
                              }}
                            />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                color: PALETTE.darkSage,
                                mb: 0.75,
                                fontSize: { xs: '1.05rem', sm: '1.15rem' },
                              }}
                            >
                              {item.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: PALETTE.darkSage,
                                lineHeight: 1.55,
                                display: 'block',
                                fontSize: { xs: '0.95rem', sm: '1rem' },
                                flex: 1,
                              }}
                            >
                              {item.description}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: PALETTE.mutedGreen,
                                fontWeight: 600,
                                mt: 1.5,
                                display: 'block',
                              }}
                            >
                              &gt; Read more
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right: Full-height image, no animation (desktop) */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 0,
                alignSelf: 'stretch',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/assets/software_holding.PNG"
                  alt="Hand holding PestiGuard device with BioAP Analysis app"
                  style={{
                    maxHeight: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
            </Box>

            {/* Mobile: image below content, no animation */}
            <Box
              sx={{
                display: { xs: 'flex', lg: 'none' },
                gridColumn: '1',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2,
                minHeight: 240,
              }}
            >
              <img
                src="/assets/software_holding.PNG"
                alt="Hand holding PestiGuard device with BioAP Analysis app"
                style={{
                  maxHeight: 260,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.12))',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </LayoutWithMeta>
  );
}
