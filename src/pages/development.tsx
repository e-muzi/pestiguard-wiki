import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import { Dna, LineChart, Network, ArrowRightLeft } from 'lucide-react';
import PageHero from '../components/PageHero';
import { colors, shadows, typography } from '../theme/design-tokens';

const mediaWrapSx = {
  borderRadius: '2rem',
  overflow: 'hidden',
  border: `1px solid ${colors.border}80`,
  boxShadow: shadows.soft,
  bgcolor: colors.card,
  p: 1.5,
  transition: 'box-shadow 0.3s ease',
  '&:hover': { boxShadow: shadows.softHover },
};

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

export default function SciencePage(): JSX.Element {
  return (
    <Layout title="Development">
      <PageHero
        title="Development"
        subtitle="From molecular simulations to bench-top validation: the engineering cycle behind the PestiGuard biosensor."
        icon={
          <Box sx={heroIconSx}>
            <Dna size={26} strokeWidth={2} />
          </Box>
        }
      >
        <Box display="flex" justifyContent="center" gap={2} mt={3} flexWrap="wrap" alignItems="center">
          <Chip
            label="Computational Modeling"
            variant="outlined"
            sx={{
              borderColor: colors.border,
              color: colors.foreground,
              fontFamily: typography.fontFamilyBody,
              fontWeight: 600,
              borderRadius: 9999,
            }}
          />
          <ArrowRightLeft size={22} style={{ color: colors.mutedForeground }} />
          <Chip
            label="Wet Lab Validation"
            variant="outlined"
            sx={{
              borderColor: colors.border,
              color: colors.foreground,
              fontFamily: typography.fontFamilyBody,
              fontWeight: 600,
              borderRadius: 9999,
            }}
          />
        </Box>
      </PageHero>

      <Box sx={{ bgcolor: colors.background }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ ...iconWrapSx, color: colors.secondary }}>
                  <Network size={28} strokeWidth={2} />
                </Box>
                <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Dry Lab: Molecular Blueprint
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                Before entering the lab, we utilized <strong>Molecular Dynamics (MD)</strong> simulations
                to predict the interaction between our target pesticides and DNA-derived RNA aptamers.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                Using tools like <strong>GROMACS</strong> and <strong>CHARMM-GUI</strong>, we simulated
                the folding patterns of our aptamers. Our focus was on measuring the binding affinity
                of <i>Glyphosate</i> and <i>Acephate</i> to ensure the RNA sequence would undergo the
                necessary conformational change to block the Ribosome Binding Site (RBS).
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  bgcolor: `${colors.primary}08`,
                  borderColor: `${colors.primary}40`,
                  borderRadius: '1.5rem',
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primary }} gutterBottom>
                  Key Computational Insight
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                  Simulations confirmed that the target pesticides bind to the aptamer with high
                  specificity, creating a steric hindrance that successfully inhibits
                  downstream protein translation.
                </Typography>
              </Paper>
            </Box>
            <Box sx={mediaWrapSx}>
              <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  display: 'block',
                  width: '100%',
                  maxHeight: 320,
                  objectFit: 'contain',
                  borderRadius: '1.25rem',
                }}
              >
                <source src="/assets/glyphosate_modeling.mp4" type="video/mp4" />
                <source src="/assets/glyphosate.mov" type="video/quicktime" />
              </Box>
              <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: colors.mutedForeground, textAlign: 'center', fontFamily: typography.fontFamilyBody }}>
                Glyphosate concentration vs. fluorescence (inverse signal)
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: `${colors.muted}60` }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={iconWrapSx}>
                  <Dna size={28} strokeWidth={2} />
                </Box>
                <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  Wet Lab: Biological Execution
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                Our wet lab work focused on constructing a robust genetic circuit within
                <i> E. coli</i> BL21. We engineered a system where the <strong>T7 promoter</strong>
                drives the expression of fluorescent reporters (EGFP/RFP).
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 600, color: colors.primary }}>
                The Inverse Signaling Mechanism
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                Unlike traditional sensors, PestiGuard uses an &quot;Inverse&quot; logic:
                <br />• <strong>No Pesticide:</strong> Translation occurs normally → High Fluorescence.
                <br />• <strong>Pesticide Present:</strong> Pesticide binds to the aptamer → RBS is blocked → Low Fluorescence.
              </Typography>
              <Typography variant="body1" sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                We also transitioned to a <strong>Cell-Free System</strong> to bypass the
                regulatory hurdles of GMOs, providing a faster and safer detection environment.
              </Typography>
            </Box>
            <Box sx={mediaWrapSx}>
              <Box
                component="img"
                src="/assets/wetlab.jpg"
                alt="Wet lab: fluorescent bacterial colonies and genetic circuit validation"
                sx={{
                  display: 'block',
                  width: '100%',
                  maxHeight: 320,
                  objectFit: 'contain',
                  borderRadius: '1.25rem',
                }}
              />
              <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: colors.mutedForeground, textAlign: 'center', fontFamily: typography.fontFamilyBody }}>
                Wet lab: fluorescent colonies and circuit validation
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: `${colors.muted}50`, py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Box sx={{ ...iconWrapSx, margin: '0 auto 1rem', width: 48, height: 48 }}>
              <LineChart size={24} strokeWidth={2} />
            </Box>
            <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
              Results & Validation
            </Typography>
            <Typography variant="body1" sx={{ color: colors.mutedForeground, mt: 1 }}>
              Real-world performance data for Glyphosate and Acephate detection.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '2rem',
                border: `1px solid ${colors.border}80`,
                bgcolor: colors.card,
                boxShadow: shadows.soft,
                '&:hover': { boxShadow: shadows.softHover },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                Standard Curve Analysis
              </Typography>
              <Box sx={{ ...mediaWrapSx, mb: 2, p: 1.5 }}>
                <Box
                  component="img"
                  src="/assets/graph.png"
                  alt="Glyphosate standard curve: fluorescence vs. concentration with linear regression"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxHeight: 260,
                    objectFit: 'contain',
                    borderRadius: '1.25rem',
                  }}
                />
                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: colors.mutedForeground, textAlign: 'center', fontFamily: typography.fontFamilyBody }}>
                  Glyphosate 0.5 (0–1): linear fit R² = 0.98
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                Our validation showed a clear linear decrease in fluorescence as pesticide
                concentration increased, confirming the accuracy of our biosensor.
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
                '&:hover': { boxShadow: shadows.softHover },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                Specificity Testing
              </Typography>
              <Box sx={{ ...mediaWrapSx, mb: 2, p: 1.5 }}>
                <Box
                  component="img"
                  src="/assets/od600.jpg"
                  alt="Specificity testing: 0 mg/L vs. 1000 mg/L glyphosate sample comparison"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxHeight: 260,
                    objectFit: 'contain',
                    borderRadius: '1.25rem',
                  }}
                />
                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: colors.mutedForeground, textAlign: 'center', fontFamily: typography.fontFamilyBody }}>
                  0 mg/L vs. 1000 mg/L glyphosate: visual specificity
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                Testing against non-target chemicals demonstrated that our aptamers
                are highly selective, ensuring no false positives from other agricultural runoff.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
