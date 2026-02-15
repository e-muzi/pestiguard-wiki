import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert,
  AlertTitle,
  Stack,
} from '@mui/material';
import {
  BookOpen,
  Soup,
  FlaskConical,
  Box as BoxIcon,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { colors, shadows, typography } from '../theme/design-tokens';

const stepImageSx = {
  borderRadius: '2rem',
  overflow: 'hidden',
  border: `1px solid ${colors.border}80`,
  boxShadow: shadows.soft,
  bgcolor: colors.card,
  p: 1.5,
  transition: 'box-shadow 0.3s ease',
  '&:hover': { boxShadow: shadows.softHover },
};

const steps = [
  {
    label: 'Sample Preparation',
    icon: <Soup size={22} strokeWidth={2} />,
    description: `Wipe the surface of your produce (vegetables or fruit) or take a small soil sample. Place the sample into the provided extraction buffer tube and shake for 30 seconds to release pesticide residues.`,
    image: '/assets/p1.jpg',
    imageAlt: 'Sample preparation: produce or soil with extraction buffer tube',
  },
  {
    label: 'Biosensor Activation',
    icon: <FlaskConical size={22} strokeWidth={2} />,
    description: `Transfer 100μL of your sample extract into the PestiGuard reaction tube (containing our engineered biosensor). If using the Cell-Free kit, the reaction will begin immediately. If using the bacterial kit, allow for the designated incubation period.`,
    image: '/assets/p2.jpg',
    imageAlt: 'Biosensor activation: transferring sample into reaction tube',
  },
  {
    label: 'SmartBox Setup',
    icon: <BoxIcon size={22} strokeWidth={2} />,
    description: `Place the reaction tube into the SmartBox adaptor. Ensure the lid is securely closed to block all ambient light. Switch on the internal blue LED excitation light.`,
    image: '/assets/smartbox.JPG',
    imageAlt: 'SmartBox setup: reaction tube in adaptor with lid closed',
  },
  {
    label: 'Software Analysis',
    icon: <CheckCircle size={22} strokeWidth={2} />,
    description: `Open the BioAP app on your smartphone. Align your camera with the SmartBox viewing port and capture a photo. The app will automatically calculate the RGB density and display your safety report.`,
    image: '/assets/bioap.png',
    imageAlt: 'BioAP app: analysis screen with sampling points and pesticide results table',
  },
];

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

export default function UsagePage(): JSX.Element {
  return (
    <Layout title="Usage">
      <PageHero
        title="Usage"
        subtitle="Follow these steps to detect pesticide residues in your food and environment using the PestiGuard system."
        icon={
          <Box sx={heroIconSx}>
            <BookOpen size={26} strokeWidth={2} />
          </Box>
        }
      />

      <Box sx={{ bgcolor: colors.background }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 6 }}>
            <Box>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: typography.fontFamilyHeading, fontWeight: 700, color: colors.foreground }}>
                Standard Operating Procedure
              </Typography>
              <Stepper orientation="vertical" sx={{ '& .MuiStepIcon-root': { color: colors.primary } }}>
                {steps.map((step) => (
                  <Step key={step.label} active>
                    <StepLabel
                      StepIconProps={{ sx: { color: colors.primary } }}
                      sx={{ '& .MuiStepLabel-label': { fontFamily: typography.fontFamilyBody, fontWeight: 600, color: colors.foreground } }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          sx={{
                            bgcolor: colors.primary,
                            color: colors.primaryForeground,
                            p: 1,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {step.icon}
                        </Box>
                        {step.label}
                      </Box>
                    </StepLabel>
                    <StepContent>
                      <Typography paragraph sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                        {step.description}
                      </Typography>
                      {'image' in step && step.image && (
                        <Box sx={{ ...stepImageSx, mb: 2 }}>
                          <Box
                            component="img"
                            src={step.image}
                            alt={step.imageAlt ?? step.label}
                            sx={{
                              display: 'block',
                              width: '100%',
                              maxHeight: 280,
                              objectFit: 'contain',
                              borderRadius: '1.25rem',
                            }}
                          />
                        </Box>
                      )}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Stack direction="column" spacing={4}>
              <Alert
                severity="warning"
                variant="outlined"
                icon={<AlertTriangle size={22} style={{ color: colors.secondary }} />}
                sx={{
                  borderRadius: '1.5rem',
                  borderColor: `${colors.secondary}60`,
                  bgcolor: `${colors.secondary}08`,
                  '& .MuiAlert-message': { color: colors.foreground },
                }}
              >
                <AlertTitle sx={{ fontWeight: 700, color: colors.foreground }}>Safety First</AlertTitle>
                Always wear gloves when handling the extraction buffer. While our
                BL21 bacteria are non-pathogenic, they should be disposed of
                according to local bio-waste guidelines or using the provided
                neutralization pouch.
              </Alert>

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: colors.foreground,
                  color: colors.primaryForeground,
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}40`,
                  boxShadow: shadows.soft,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 700, fontFamily: typography.fontFamilyHeading }}>
                  Interpreting Results
                </Typography>
                <Typography variant="body2" paragraph sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                  PestiGuard uses <strong>Inverse Signal Logic</strong>.
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>High Signal (Bright Green)</Typography>
                    <Typography variant="caption" sx={{ color: colors.primary }}>SAFE</Typography>
                  </Box>
                  <Box sx={{ height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden', mb: 3 }}>
                    <Box sx={{ height: '100%', width: '100%', background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 100%)` }} />
                  </Box>

                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>Low Signal (Dim/No Color)</Typography>
                    <Typography variant="caption" sx={{ color: colors.destructive }}>DANGER</Typography>
                  </Box>
                  <Box sx={{ height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                    <Box sx={{ height: '100%', width: '20%', bgcolor: colors.destructive }} />
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic', opacity: 0.8, lineHeight: 1.6 }}>
                  * The BioAP software will automatically convert these light
                  levels into a numerical ppm (parts per million) value for you.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: '2rem',
                  border: `1px solid ${colors.border}80`,
                  bgcolor: colors.card,
                  boxShadow: shadows.soft,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.foreground, fontFamily: typography.fontFamilyHeading }} gutterBottom>
                  Troubleshooting
                </Typography>
                <Typography variant="body2" sx={{ color: colors.mutedForeground, lineHeight: 1.7 }}>
                  • <strong>No signal?</strong> Check if the Blue LED is turned on.<br />
                  • <strong>Blurry photo?</strong> Ensure the phone lens is cleaned and flush against the SmartBox port.<br />
                  • <strong>Error 404?</strong> Check your internet connection for BioAP cloud analysis.
                </Typography>
              </Paper>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
