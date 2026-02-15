import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { FileText, Lightbulb, Target, Dna, CheckCircle, ArrowRight } from 'lucide-react';
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

export default function ProjectDescription(): JSX.Element {
  return (
    <Layout title="Project">
      <PageHero
        title="Project"
        subtitle="Bridging the gap between synthetic biology and consumer safety through the development of a portable, cell-free pesticide biosensor."
        icon={
          <Box sx={heroIconSx}>
            <FileText size={26} strokeWidth={2} />
          </Box>
        }
      />

      <Box sx={{ bgcolor: colors.background }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 6 }}>
            <Box>
              <Box mb={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={iconWrapSx}>
                    <Lightbulb size={28} strokeWidth={2} />
                  </Box>
                  <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                    Inspiration
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                  The widespread use of pesticides in modern agriculture has led to
                  unprecedented environmental and health concerns. Chemical residues
                  from agents like <strong>Glyphosate</strong> and <strong>Acephate</strong>
                  persist in our food chain, linked to chronic conditions such as
                  respiratory issues and neurodegenerative diseases.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                  While governmental regulations exist, the average consumer has no way
                  to verify the safety of their produce at home. Standard laboratory
                  techniques like <strong>HPLC</strong> or <strong>GC-MS</strong> are
                  prohibitively expensive and slow, requiring days for results. We were
                  inspired to create a tool that moves high-precision sensing from the
                  lab to the kitchen counter.
                </Typography>
              </Box>

              <Box mb={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={{ ...iconWrapSx, color: colors.secondary }}>
                    <Target size={28} strokeWidth={2} />
                  </Box>
                  <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                    Our Goal
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                  PestiGuard aims to democratize food safety. By utilizing synthetic
                  biology, we have developed a <strong>cell-free biosensor</strong>
                  that detects specific pesticide molecules through RNA aptamer binding.
                  Our system provides a visual fluorescence-based result that is
                  quantified via a smartphone app, ensuring that anyone, anywhere,
                  can monitor the safety of their food.
                </Typography>
              </Box>

              <Box mb={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={iconWrapSx}>
                    <Dna size={28} strokeWidth={2} />
                  </Box>
                  <Typography variant="h4" sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                    Proposed Implementation
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                  The PestiGuard system follows a three-step workflow designed for
                  ease of use:
                </Typography>

                <List disablePadding>
                  {[
                    { title: 'Sample Preparation', text: 'Wash produce with a specialized buffer to extract surface pesticide residues.' },
                    { title: 'Biosensor Reaction', text: 'Add the extract to our SmartBox containing the genetic circuit; binding triggers a change in GFP expression.' },
                    { title: 'Software Analysis', text: 'Capture an image with the BioAP app to receive an instant toxicity report based on fluorescence intensity.' },
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ alignItems: 'flex-start', px: 0 }}>
                      <ListItemIcon sx={{ mt: 1, minWidth: 36 }}>
                        <CheckCircle size={22} style={{ color: colors.primary }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={<strong style={{ color: colors.foreground }}>{item.title}</strong>}
                        secondary={item.text}
                        primaryTypographyProps={{ sx: { color: colors.foreground } }}
                        secondaryTypographyProps={{ sx: { color: colors.mutedForeground, lineHeight: 1.6 } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: colors.card,
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}80`,
                  boxShadow: shadows.soft,
                  position: 'sticky',
                  top: 100,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                  At a Glance
                </Typography>

                <Box mb={3}>
                  <Typography variant="subtitle2" sx={{ color: colors.primary, fontWeight: 700 }} gutterBottom>
                    PRIMARY TARGETS
                  </Typography>
                  <Stack direction="column" spacing={1}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <ArrowRight size={16} style={{ color: colors.primary }} />
                      <Typography variant="body2" sx={{ color: colors.mutedForeground }}>Glyphosate (Herbicide)</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <ArrowRight size={16} style={{ color: colors.primary }} />
                      <Typography variant="body2" sx={{ color: colors.mutedForeground }}>Acephate (Insecticide)</Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box mb={3}>
                  <Typography variant="subtitle2" sx={{ color: colors.primary, fontWeight: 700 }} gutterBottom>
                    TECHNOLOGY
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                    Synthetic Genetic Circuits, RNA Aptamers, Cell-Free Expression (CFE).
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ color: colors.primary, fontWeight: 700 }} gutterBottom>
                    INTENDED USERS
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.6 }}>
                    Households, Small-scale Farmers, and Food Safety Inspectors.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
