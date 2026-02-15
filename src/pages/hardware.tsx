import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { motion } from 'motion/react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Box as BoxIcon,
  Lightbulb,
  Filter,
  Settings,
  Wrench,
  WifiOff,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { colors, shadows, typography } from '../theme/design-tokens';

const heroIconSx = {
  width: 48,
  height: 48,
  borderRadius: '1rem',
  bgcolor: `${colors.primary}18`,
  color: colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

const iconWrapSx = {
  width: 56,
  height: 56,
  borderRadius: '1rem',
  bgcolor: `${colors.primary}18`,
  color: colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

export default function HardwarePage(): JSX.Element {
  return (
    <Layout title="Hardware">
      <PageHero
        title="Hardware"
        subtitle="SmartBox: a portable, 3D-printed enclosure for a dark, controlled environment and precise fluorescence quantification."
        icon={
          <Box sx={heroIconSx}>
            <BoxIcon size={26} strokeWidth={2} />
          </Box>
        }
      />

      <Box sx={{ bgcolor: colors.background }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* 1. Design Overview */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center',
              mb: 8,
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={iconWrapSx}>
                  <BoxIcon size={28} strokeWidth={2} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: typography.fontFamilyHeading,
                    fontWeight: 700,
                    color: colors.foreground,
                  }}
                >
                  Compact & Fully 3D-Printed
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                The SmartBox is a compact, fully 3D-printed enclosure consisting of three
                major components: a black box with an orange filter, a blue light source,
                and a dedicated cover for placing samples.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                To ensure accuracy, the box is constructed with <strong>black-walled
                interiors</strong> that minimize internal light reflection.
                The design eliminates extra openings to prevent external light leakage,
                ensuring the validity of every reading.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ width: '100%', maxWidth: 480 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2rem',
                    border: `1px solid ${colors.border}80`,
                    bgcolor: colors.card,
                    boxShadow: shadows.soft,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary})`,
                      opacity: 0.85,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      pt: '4px',
                      px: 2,
                      pb: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minHeight: 320,
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src="/assets/hardware.PNG"
                      alt="3D CAD draft of the assembled SmartBox"
                      sx={{
                        maxHeight: 280,
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 8px 24px rgba(93, 112, 82, 0.15))',
                        transition: 'transform 0.35s ease',
                        '&:hover': { transform: 'scale(1.02)' },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 1.5,
                        color: colors.mutedForeground,
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                      }}
                    >
                      3D CAD draft · SmartBox assembly
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Box>

          {/* 2. Optical System */}
          <Box sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ ...iconWrapSx, margin: '0 auto 1rem', width: 48, height: 48 }}>
                <Wrench size={24} strokeWidth={2} />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: typography.fontFamilyHeading,
                  fontWeight: 700,
                  color: colors.foreground,
                }}
              >
                Optical Specifications
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}80`,
                  bgcolor: colors.card,
                  boxShadow: shadows.soft,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: shadows.softHover },
                }}
              >
                <Box sx={{ ...iconWrapSx, mb: 2, width: 48, height: 48 }}>
                  <Lightbulb size={24} strokeWidth={2} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Blue Light Source
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                  A blue LED light strip provides even illumination across the
                  samples. This precise light source is essential
                  for exciting the Green Fluorescent Protein (GFP) produced by
                  the biosensor.
                </Typography>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}80`,
                  bgcolor: colors.card,
                  boxShadow: shadows.soft,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: shadows.softHover },
                }}
              >
                <Box sx={{ ...iconWrapSx, mb: 2, width: 48, height: 48, color: colors.secondary }}>
                  <Filter size={24} strokeWidth={2} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Orange Filter
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                  The box includes an integrated orange filter that isolates
                  the emission signal. It blocks the blue
                  excitation light, allowing the smartphone camera to capture
                  only the green light intensity emitted by the biosensor.
                </Typography>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}80`,
                  bgcolor: colors.card,
                  boxShadow: shadows.soft,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: shadows.softHover },
                }}
              >
                <Box sx={{ ...iconWrapSx, mb: 2, width: 48, height: 48 }}>
                  <Settings size={24} strokeWidth={2} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Versatile Adaptors
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                  The SmartBox is designed to be versatile. It includes custom
                  adaptors to accommodate both 1.5 mL Eppendorf tubes and
                  larger 15 mL conical tubes, making it suitable for both
                  home testing and lab-scale needs.
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* 3. Portability and Workflow */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ width: '100%', maxWidth: 420 }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '2rem',
                    boxShadow: shadows.soft,
                    '&:hover .hardware-advantage-img': {
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <Box
                    className="hardware-advantage-img"
                    component="img"
                    src="/assets/hardware_flow.JPG"
                    alt="SmartBox foldable, field-ready design for on-site testing"
                    sx={{
                      display: 'block',
                      maxHeight: 300,
                      width: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 30px rgba(93, 112, 82, 0.12))',
                      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={iconWrapSx}>
                  <WifiOff size={28} strokeWidth={2} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: typography.fontFamilyHeading,
                    fontWeight: 700,
                    color: colors.foreground,
                  }}
                >
                  Field-Ready Design
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                The SmartBox is designed for maximum portability with a <strong>foldable
                structure</strong>. This allows users to easily transport the
                kit for on-site testing in grocery stores, farms, or community gardens.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 600, color: colors.foreground }}>
                Hardware Workflow:
              </Typography>
              <List disablePadding>
                {[
                  'Insert the induced biosensor tube into the appropriate adaptor.',
                  'Close the lid to seal out ambient light.',
                  'Activate the blue LED and capture the result through the orange filter using the BioAP software.',
                ].map((step, index) => (
                  <ListItem key={index} sx={{ px: 0, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 40, mt: 0.25 }}>
                      <Typography variant="body1" sx={{ fontWeight: 700, color: colors.primary }}>
                        {index + 1}.
                      </Typography>
                    </ListItemIcon>
                    <ListItemText
                      primary={step}
                      primaryTypographyProps={{ sx: { color: colors.mutedForeground, lineHeight: 1.6 } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
