import React from 'react';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Divider,
  Stack,
  useTheme
} from '@mui/material';
import { 
  Update, 
  RocketLaunch, 
  LibraryAdd, 
  Memory, 
  BatchPrediction,
  CheckCircle
} from '@mui/icons-material';

export default function FutureDevelopment(): JSX.Element {
  const theme = useTheme();

  // Branding Colors
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  const roadmapItems = [
    {
      stage: "Phase 1: Optimization",
      title: "Cell-Free Transition",
      description: "Finalizing the transition from E. coli BL21 to a fully lyophilized (freeze-dried) cell-free system to ensure zero-GMO consumer handling.",
      icon: <Update />,
      color: "primary"
    },
    {
      stage: "Phase 2: Expansion",
      title: "Aptamer Library Growth",
      description: "Utilizing SELEX and Computational MD simulations to develop specific RNA aptamers for Neonicotinoids and Pyrethroids.",
      icon: <LibraryAdd />,
      color: "secondary"
    },
    {
      stage: "Phase 3: Hardware Evolution",
      title: "SmartBox Miniaturization",
      description: "Developing a pocket-sized, collapsible SmartBox with integrated LED power management for fieldwork in remote agricultural areas.",
      icon: <Memory />,
      color: "info"
    },
    {
      stage: "Phase 4: Global Deployment",
      title: "Predictive Analytics",
      description: "Integrating BioAP data with global maps to create real-time 'Pesticide Heatmaps' for public health monitoring.",
      icon: <RocketLaunch />,
      color: "success"
    }
  ];

  return (
    <Layout title="Future Development">
      {/* Hero Header */}
      <Box sx={{ bgcolor: 'background.paper', pt: 10, pb: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <RocketLaunch sx={{ fontSize: 60, color: gfpGreen, mb: 2 }} />
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              The Roadmap Ahead
            </Typography>
            <Typography variant="h5" color="text.secondary">
              PestiGuard is more than a project—it is a scalable platform for 
              global food transparency.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Roadmap Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: 6 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              From Prototype to Product
            </Typography>
            <Typography variant="body1" paragraph>
              While our current results demonstrate proof-of-concept for Glyphosate 
              and Acephate, our development cycle focuses on addressing the two 
              biggest hurdles in biosensing: <strong>portability</strong> and <strong>regulatory safety</strong>.
            </Typography>
            <Typography variant="body1" paragraph>
              By moving toward a cell-free platform, we not only speed up the 
              reaction time but also create a product that can be shipped globally 
              without the strict cold-chain requirements of live bacteria.
            </Typography>
            
            <Paper elevation={0} sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 4, mt: 4 }}>
              <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                <BatchPrediction sx={{ mr: 1, color: bioBlue }} /> Future Vision
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "Our ultimate goal is a world where a parent can test store-bought 
                fruit as easily as a thermometer checks for a fever."
              </Typography>
            </Paper>
          </Box>

          <Box>
            {/* Visual Roadmap */}
            {roadmapItems.map((item, index) => (
              <Box key={index} sx={{ mb: 4, display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
                  <Box sx={{ 
                    bgcolor: `${item.color}.main`, 
                    color: 'white', 
                    p: 1.5, 
                    borderRadius: '50%', 
                    display: 'flex' 
                  }}>
                    {item.icon}
                  </Box>
                  {index !== roadmapItems.length - 1 && (
                    <Box sx={{ width: '2px', bgcolor: 'divider', flexGrow: 1, my: 1 }} />
                  )}
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.stage}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* Strategic Goals Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
            Expanding the Library
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box>
              
              <Box sx={{ 
                height: 250, 
                bgcolor: 'rgba(255,255,255,0.1)', 
                borderRadius: 4, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography variant="caption" sx={{ px: 4, textAlign: 'center' }}>
                  [IMAGE SUGGESTION: A molecular 'library' visualization showing 
                  different pesticide families that the biosensor will be adapted for]
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" sx={{ color: gfpGreen }}>Regulatory Approval</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Working with food safety authorities to standardize biosensor 
                    readings for consumer-level 'Organic' verification.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: bioBlue }}>Machine Learning Integration</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Training our BioAP algorithms on thousands of images to account 
                    for varying ambient light conditions without the need for a SmartBox.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'warning.main' }}>Open Science Library</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Releasing our aptamer sequences to the iGEM registry to allow 
                    other teams to build upon the PestiGuard detection circuit.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Final Call to Action */}
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <CheckCircle sx={{ fontSize: 50, color: gfpGreen, mb: 2 }} />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Join Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We are currently seeking collaborators in bioinformatics and 3D design 
          to help scale PestiGuard for the next generation of food safety.
        </Typography>
      </Container>
    </Layout>
  );
}