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
  useTheme
} from '@mui/material';
import { 
  MenuBook, 
  SoupKitchen, 
  Science, 
  AppRegistration, 
  CheckCircle,
  WarningAmber
} from '@mui/icons-material';

export default function UsagePage(): JSX.Element {
  const theme = useTheme();

  // Step Data for the Workflow
  const steps = [
    {
      label: 'Sample Preparation',
      icon: <SoupKitchen />,
      description: `Wipe the surface of your produce (vegetables or fruit) or take a small soil sample. Place the sample into the provided extraction buffer tube and shake for 30 seconds to release pesticide residues.`,
    },
    {
      label: 'Biosensor Activation',
      icon: <Science />,
      description: `Transfer 100μL of your sample extract into the PestiGuard reaction tube (containing our engineered biosensor). If using the Cell-Free kit, the reaction will begin immediately. If using the bacterial kit, allow for the designated incubation period.`,
    },
    {
      label: 'SmartBox Setup',
      icon: <AppRegistration />,
      description: `Place the reaction tube into the SmartBox adaptor. Ensure the lid is securely closed to block all ambient light. Switch on the internal blue LED excitation light.`,
    },
    {
      label: 'Software Analysis',
      icon: <CheckCircle />,
      description: `Open the BioAP app on your smartphone. Align your camera with the SmartBox viewing port and capture a photo. The app will automatically calculate the RGB density and display your safety report.`,
    },
  ];

  return (
    <Layout title="Usage Guide">
      {/* Hero Header – same pattern as Development page */}
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="center" mb={2}>
            <MenuBook sx={{ fontSize: 48, color: 'primary.main' }} />
          </Box>
          <Typography variant="h2" align="center" color="text.primary" gutterBottom sx={{ fontWeight: 800 }}>
            User Guide
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Follow these simple steps to detect pesticide residues in your 
            food and environment using the PestiGuard system.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 6 }}>
          {/* Left: Step-by-Step Instructions */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Standard Operating Procedure
            </Typography>
            <Stepper orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label} active={true}>
                  <StepLabel>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1, borderRadius: '50%', display: 'flex', mr: 1 }}>
                        {step.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {step.label}
                      </Typography>
                    </Box>
                  </StepLabel>
                  <StepContent>
                    <Typography color="text.secondary" paragraph>
                      {step.description}
                    </Typography>
                    <Box 
                      sx={{ 
                        mb: 2, 
                        p: 2, 
                        bgcolor: 'grey.100', 
                        borderRadius: 2, 
                        border: '1px dashed #ccc',
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="caption">
                        [IMAGE PLACEHOLDER: Visual illustration for {step.label}]
                      </Typography>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Right: Safety and Interpretation */}
          <Box>
            <Stack direction="column" spacing={4}>
              {/* Safety Alert */}
              <Alert severity="warning" variant="outlined" icon={<WarningAmber fontSize="inherit" />}>
                <AlertTitle sx={{ fontWeight: 'bold' }}>Safety First</AlertTitle>
                Always wear gloves when handling the extraction buffer. While our 
                BL21 bacteria are non-pathogenic, they should be disposed of 
                according to local bio-waste guidelines or using the provided 
                neutralization pouch.
              </Alert>

              {/* Interpretation Paper */}
              <Paper sx={{ p: 4, bgcolor: 'grey.900', color: 'white', borderRadius: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                  Interpreting Results
                </Typography>
                <Typography variant="body2" paragraph sx={{ opacity: 0.8 }}>
                  PestiGuard uses <strong>Inverse Signal Logic</strong>.
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="caption">High Signal (Bright Green)</Typography>
                    <Typography variant="caption" color="#4CAF50">SAFE</Typography>
                  </Box>
                  <Box sx={{ height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden', mb: 3 }}>
                    <Box sx={{ height: '100%', width: '100%', background: 'linear-gradient(90deg, #1b5e20 0%, #4caf50 100%)' }} />
                  </Box>

                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="caption">Low Signal (Dim/No Color)</Typography>
                    <Typography variant="caption" color="#f44336">DANGER</Typography>
                  </Box>
                  <Box sx={{ height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                    <Box sx={{ height: '100%', width: '20%', background: '#f44336' }} />
                  </Box>
                </Box>
                
                <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic', opacity: 0.7 }}>
                  * The BioAP software will automatically convert these light 
                  levels into a numerical ppm (parts per million) value for you.
                </Typography>
              </Paper>

              {/* Troubleshooting Card */}
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Troubleshooting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • <strong>No signal?</strong> Check if the Blue LED is turned on.<br />
                  • <strong>Blurry photo?</strong> Ensure the phone lens is cleaned and flush against the SmartBox port.<br />
                  • <strong>Error 404?</strong> Check your internet connection for BioAP cloud analysis.
                </Typography>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}