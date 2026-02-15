import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Smartphone,
  Database,
  Brain,
  BarChart3,
  Globe,
  Plug,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { colors, shadows, typography } from '../theme/design-tokens';

/** Add your BioAP demo URL here to show a "Try the demo" CTA on the software page. */
const DEMO_SOFTWARE_URL = 'https://bioap.26650078.xyz/';

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

export default function SoftwarePage(): JSX.Element {
  return (
    <Layout title="Software">
      <PageHero
        title="Software"
        subtitle="BioAP platform: custom-built analysis software that translates biological fluorescence into actionable safety data."
        icon={
          <Box sx={heroIconSx}>
            <Smartphone size={26} strokeWidth={2} />
          </Box>
        }
      >
        <Box display="flex" justifyContent="center" gap={2} mt={3} flexWrap="wrap">
          <Chip label="Flask / Python" variant="outlined" sx={{ borderColor: colors.border, color: colors.foreground, borderRadius: 9999, fontWeight: 600 }} />
          <Chip label="SQLite / SQLAlchemy" variant="outlined" sx={{ borderColor: colors.border, color: colors.foreground, borderRadius: 9999, fontWeight: 600 }} />
          <Chip label="Computer Vision" variant="outlined" sx={{ borderColor: colors.border, color: colors.foreground, borderRadius: 9999, fontWeight: 600 }} />
        </Box>
      </PageHero>

      {/* Demo software CTA — set DEMO_SOFTWARE_URL at the top of this file */}
      <Box sx={{ bgcolor: `${colors.muted}60`, py: 6 }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: '2rem',
              border: `1px solid ${colors.border}80`,
              bgcolor: colors.card,
              boxShadow: shadows.soft,
              textAlign: 'center',
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: shadows.softHover },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '1rem',
                bgcolor: `${colors.secondary}18`,
                color: colors.secondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              <ExternalLink size={28} strokeWidth={2} />
            </Box>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
              Try the demo
            </Typography>
            <Typography variant="body2" sx={{ color: colors.mutedForeground, mb: 3, maxWidth: 480, mx: 'auto', lineHeight: 1.6 }}>
              Experience the BioAP platform: upload a sample image and see how the CV pipeline analyzes fluorescence.
            </Typography>
            {DEMO_SOFTWARE_URL ? (
              <Box
                component="a"
                href={DEMO_SOFTWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 4,
                  py: 2,
                  borderRadius: 9999,
                  bgcolor: colors.primary,
                  color: colors.primaryForeground,
                  fontFamily: typography.fontFamilyBody,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: shadows.soft,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: shadows.softHover,
                    transform: 'scale(1.05)',
                    color: colors.primaryForeground,
                  },
                  '&:active': { transform: 'scale(0.98)' },
                }}
              >
                Open demo
                <ExternalLink size={20} strokeWidth={2} />
              </Box>
            ) : (
              <Typography variant="caption" sx={{ color: colors.mutedForeground, fontStyle: 'italic' }}>
                Add your demo URL in <code style={{ background: `${colors.muted}`, padding: '2px 6px', borderRadius: 6 }}>src/pages/software.tsx</code> (DEMO_SOFTWARE_URL)
              </Typography>
            )}
          </Paper>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.background }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
              System Architecture: Model-View-Controller (MVC)
            </Typography>
            <Typography variant="body1" sx={{ color: colors.mutedForeground, maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
              The BioAP platform utilizes a decoupled MVC architecture to ensure organized logic,
              data integrity, and high performance.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '2rem',
                border: `1px solid ${colors.border}80`,
                bgcolor: colors.card,
                boxShadow: shadows.soft,
                height: '100%',
                transition: 'box-shadow 0.3s ease',
                '&:hover': { boxShadow: shadows.softHover },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ ...iconWrapSx, width: 48, height: 48 }}>
                  <Database size={24} strokeWidth={2} />
                </Box>
                <Typography variant="h5" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Model (Database)
                </Typography>
              </Box>
              <Typography variant="body2" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                A lightweight SQLite database managed via SQLAlchemy handles local data persistence. It stores:
              </Typography>
              <List dense disablePadding>
                <ListItem disablePadding sx={{ alignItems: 'flex-start', mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.25 }}>
                    <CheckCircle size={18} style={{ color: colors.primary }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Calibration Data"
                    secondary="Profiles defining detection parameters, including standard curves for specific pesticides."
                    primaryTypographyProps={{ fontWeight: 600, variant: 'body2', color: colors.foreground }}
                    secondaryTypographyProps={{ variant: 'body2', color: colors.mutedForeground }}
                  />
                </ListItem>
                <ListItem disablePadding sx={{ alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.25 }}>
                    <CheckCircle size={18} style={{ color: colors.primary }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Operational Data"
                    secondary="User activity, metadata, image paths, and calculated concentrations."
                    primaryTypographyProps={{ fontWeight: 600, variant: 'body2', color: colors.foreground }}
                    secondaryTypographyProps={{ variant: 'body2', color: colors.mutedForeground }}
                  />
                </ListItem>
              </List>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '2rem',
                border: `1px solid ${colors.border}80`,
                bgcolor: colors.card,
                boxShadow: shadows.soft,
                height: '100%',
                transition: 'box-shadow 0.3s ease',
                '&:hover': { boxShadow: shadows.softHover },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ ...iconWrapSx, width: 48, height: 48 }}>
                  <Globe size={24} strokeWidth={2} />
                </Box>
                <Typography variant="h5" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  View (Frontend)
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                The user interface is built with Jinja2 templates and styled with Bootstrap 5 and Material-UI
                for a responsive, multi-platform experience.
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '2rem',
                border: `1px solid ${colors.border}80`,
                bgcolor: colors.card,
                boxShadow: shadows.soft,
                height: '100%',
                transition: 'box-shadow 0.3s ease',
                '&:hover': { boxShadow: shadows.softHover },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ ...iconWrapSx, width: 48, height: 48 }}>
                  <Plug size={24} strokeWidth={2} />
                </Box>
                <Typography variant="h5" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Controller (Backend)
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                A Python Flask framework manages server-side logic and REST-style routing to handle user requests
                and complex scientific calculations.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: `${colors.muted}50`, py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={iconWrapSx}>
                  <Brain size={28} strokeWidth={2} />
                </Box>
                <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  The CV Engine & Algorithm
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                The &quot;heart&quot; of BioAP is a robust Computer Vision (CV) algorithm that automates image analysis.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                <strong>RGB Optical Density:</strong> The software calculates the RGB intensity within specific
                Regions of Interest (ROI) where the E.coli samples are located.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                <strong>Scientific Libraries:</strong> It leverages powerful Python libraries like NumPy and Pillow
                for efficient image processing.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                <strong>Quantification:</strong> By comparing captured intensity to pre-loaded standard curves,
                the system converts raw RGB data into accurate concentrations for pesticides like Glyphosate and Acephate.
              </Typography>
              <Box sx={{ p: 2, bgcolor: colors.card, borderRadius: '1.5rem', border: `1px solid ${colors.border}80` }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primary }} gutterBottom>
                  Workflow
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground }}>
                  (Calibration) → Capture → Adjust → Analyze → Result
                </Typography>
              </Box>
              <Box mt={2} display="flex" gap={1} flexWrap="wrap">
                <Chip label="High Accuracy" size="small" sx={{ bgcolor: `${colors.primary}18`, color: colors.primary, fontWeight: 600, borderRadius: 9999 }} />
                <Chip label="Low Latency" size="small" sx={{ bgcolor: `${colors.primary}18`, color: colors.primary, fontWeight: 600, borderRadius: 9999 }} />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  border: `1px solid ${colors.border}80`,
                  boxShadow: shadows.soft,
                  bgcolor: colors.card,
                  p: 1.5,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: shadows.softHover },
                }}
              >
                <Box
                  component="img"
                  src="/assets/software.png"
                  alt="BioAP computer vision: original sample image and processed analysis"
                  sx={{
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: 340,
                    objectFit: 'contain',
                    borderRadius: '1.25rem',
                  }}
                />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  mt: 1.5,
                  color: colors.mutedForeground,
                  textAlign: 'center',
                  fontFamily: typography.fontFamilyBody,
                  fontSize: '0.8125rem',
                }}
              >
                CV pipeline: capture → process → result
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.background }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Box sx={{ ...iconWrapSx, margin: '0 auto 1rem', width: 48, height: 48 }}>
              <BarChart3 size={24} strokeWidth={2} />
            </Box>
            <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
              User Acceptance Testing (UAT) Results
            </Typography>
            <Typography variant="body1" sx={{ color: colors.mutedForeground }}>
              Testing with community participants validated the software&apos;s performance across key metrics.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
            {[
              { label: 'Intuitive Workflow', value: '94%', desc: 'Users found the navigation and the [Capture → (Align) → Analyze → Result] process easy to follow.' },
              { label: 'System Reliability', value: '98%', desc: 'The Python-based Flask backend provided stable and robust scientific computation.' },
              { label: 'Overall Satisfaction', value: '91%', desc: "Participants highly rated the application's clarity and the Material-UI visual design." },
            ].map((stat, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}80`,
                  bgcolor: colors.card,
                  boxShadow: shadows.soft,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: shadows.softHover },
                }}
              >
                <Typography variant="h3" sx={{ color: colors.primary, fontWeight: 700, fontFamily: typography.fontFamilyHeading }}>
                  {stat.value}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 600, color: colors.foreground }}>
                  {stat.label}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                  {stat.desc}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Box mt={6} textAlign="center">
            <Typography variant="body1" sx={{ color: colors.mutedForeground, fontStyle: 'italic', lineHeight: 1.6 }}>
              &quot;The PestiGuard app is as simple as taking a photo, yet provides lab-grade information I can actually use.&quot; — UAT Participant
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
