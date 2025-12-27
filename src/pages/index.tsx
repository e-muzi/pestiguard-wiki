import React from 'react';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Stack,
  useTheme
} from '@mui/material';
import { 
  Biotech, 
  SettingsInputComponent, 
  Smartphone, 
  HealthAndSafety 
} from '@mui/icons-material';

export default function Home(): JSX.Element {
  const theme = useTheme();

  // Custom Colors based on the style guide
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  return (
    <Layout title="Home" description="PestiGuard: An innovative biosensor for pesticide detection">
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          pt: 10, 
          pb: 8, 
          borderBottom: `1px solid ${theme.palette.divider}`,
          background: `linear-gradient(180deg, rgba(76, 175, 80, 0.05) 0%, rgba(255,255,255,1) 100%)`
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: '800' }}
          >
            PestiGuard
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            An innovative, all-in-one biosensor empowering consumers to detect 
            pesticide residues directly in food and soil with laboratory precision.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button 
              variant="contained" 
              size="large" 
              href="/project-description"
              sx={{ bgcolor: gfpGreen, '&:hover': { bgcolor: '#388E3C' } }}
            >
              Explore the Project
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              href="/development"
              sx={{ color: bioBlue, borderColor: bioBlue }}
            >
              View the SmartBox
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* The Problem Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              The Challenge: Pesticide Ubiquity
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Modern agriculture relies heavily on pesticides like <strong>Glyphosate</strong> and <strong>Acephate</strong>. 
              While effective, their residues often remain on produce, contributing to long-term 
              health risks including cancer and neurodegenerative diseases like Parkinson's.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Current detection methods are expensive, slow, and require professional laboratories. 
              <strong> PestiGuard </strong> bridges this gap, bringing biosensing technology to your kitchen.
            </Typography>
          </Box>
          <Box>
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: 'grey.900', 
                borderRadius: 4, 
                color: 'white',
                boxShadow: 6
              }}
            >
              <Typography variant="h6" color={gfpGreen} gutterBottom>
                The PestiGuard Solution
              </Typography>
              <Typography variant="body2">
                "We use a synthetic genetic circuit that reacts to pesticide presence 
                by modulating fluorescence—providing a visual signal that is processed 
                instantly by our AI-driven software."
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Key Highlights (Three Pillars) */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
            Our Integrated System
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
            {/* Pillar 1: Genetic Circuit */}
            <Box>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Biotech sx={{ fontSize: 50, color: gfpGreen, mb: 2 }} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Biosensor Circuit
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A self-contained cellular circuit using RNA aptamers and T7 promoters 
                    to detect pesticides. Features an inverse signaling mechanism: 
                    dimmer light indicates higher toxicity.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Pillar 2: Hardware */}
            <Box>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <SettingsInputComponent sx={{ fontSize: 50, color: bioBlue, mb: 2 }} />
                  <Typography gutterBottom variant="h5" component="h2">
                    SmartBox
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A custom 3D-printed optical darkroom. Optimized with blue light 
                    excitation strips and orange emission filters to capture 
                    precise fluorescence data via smartphone.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Pillar 3: Software */}
            <Box>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Smartphone sx={{ fontSize: 50, color: '#9C27B0', mb: 2 }} />
                  <Typography gutterBottom variant="h5" component="h2">
                    BioAP Platform
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Advanced computer vision algorithms analyze RGB optical density 
                    to provide instant concentration results and safety warnings 
                    directly to the user.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Impact/SDG Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <HealthAndSafety sx={{ fontSize: 40, color: 'error.main' }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Safe. Sustainable. Scientific.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Aligned with UN Sustainable Development Goals (SDG 3, 6, and 13), 
            PestiGuard promotes responsible consumption and protects human 
            health from the silent threat of chemical runoff.
          </Typography>
          <Button variant="text" color="primary" href="/impact">
            Learn more about our Impact →
          </Button>
        </Stack>
      </Container>
      
      {/* Contact Us Section */}
      <Container sx={{ py: 10 }} maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Have questions or want to collaborate? Reach out and we’ll get back to you.
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              display: 'inline-block',
              minWidth: 320
            }}
          >
            <Typography variant="body2">
              Email: <a href="mailto:hello@pestiguard.wiki">hello@pestiguard.wiki</a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}