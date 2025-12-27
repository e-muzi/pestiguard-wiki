import React from 'react';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import { 
  ViewInAr, 
  Lightbulb, 
  FilterAlt, 
  SettingsInputComponent,
  Construction,
  PortableWifiOff
} from '@mui/icons-material';

export default function HardwarePage(): JSX.Element {
  const theme = useTheme();

  // Branding Colors
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  return (
    <Layout title="Hardware: The SmartBox">
      {/* Hero Header */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            SmartBox: The Optical Environment
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8 }}>
            A portable, 3D-printed enclosure designed to provide a dark, controlled 
            environment for precise fluorescence quantification[cite: 138].
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* 1. Design Overview */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center', mb: 8 }}>
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <ViewInAr sx={{ color: bioBlue, mr: 1, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Compact & Fully 3D-Printed</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              The SmartBox is a compact, fully 3D-printed enclosure consisting of three 
              major components: a black box with an orange filter, a blue light source, 
              and a dedicated cover for placing samples[cite: 139].
            </Typography>
            <Typography variant="body1" paragraph>
              To ensure accuracy, the box is constructed with <strong>black-walled 
              interiors</strong> that minimize internal light reflection[cite: 29]. 
              The design eliminates extra openings to prevent external light leakage, 
              ensuring the validity of every reading[cite: 30].
            </Typography>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: 350, 
                bgcolor: 'grey.200', 
                borderRadius: 4, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                border: '2px dashed grey'
              }}
            >
              <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', px: 4 }}>
                [IMAGE SUGGESTION: 3D CAD rendering or photo of the assembled SmartBox 
                showing the lid, internal tube holder, and outer casing]
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* 2. Optical System */}
        <Box mb={8}>
          <Box textAlign="center" mb={4}>
            <Construction sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Optical Specifications</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
            {/* Component: Blue LED */}
            <Box>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <Lightbulb sx={{ color: bioBlue, mb: 2 }} />
                <Typography variant="h6" gutterBottom>Blue Light Source</Typography>
                <Typography variant="body2" color="text.secondary">
                  A blue LED light strip provides even illumination across the 
                  samples[cite: 29, 139]. This precise light source is essential 
                  for exciting the Green Fluorescent Protein (GFP) produced by 
                  the biosensor.
                </Typography>
              </Paper>
            </Box>
            {/* Component: Orange Filter */}
            <Box>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <FilterAlt sx={{ color: '#FF9800', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Orange Filter</Typography>
                <Typography variant="body2" color="text.secondary">
                  The box includes an integrated orange filter that isolates 
                  the emission signal[cite: 29, 139]. It blocks the blue 
                  excitation light, allowing the smartphone camera to capture 
                  only the green light intensity emitted by the biosensor[cite: 136].
                </Typography>
              </Paper>
            </Box>
            {/* Component: Tube Adaptors */}
            <Box>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <SettingsInputComponent sx={{ color: gfpGreen, mb: 2 }} />
                <Typography variant="h6" gutterBottom>Versatile Adaptors</Typography>
                <Typography variant="body2" color="text.secondary">
                  The SmartBox is designed to be versatile. It includes custom 
                  adaptors to accommodate both 1.5 mL Eppendorf tubes and 
                  larger 15 mL conical tubes, making it suitable for both 
                  home testing and lab-scale needs.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* 3. Portability and Workflow */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          <Box>
            <Box 
              sx={{ 
                height: 300, 
                bgcolor: 'grey.200', 
                borderRadius: 4, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                border: '2px dashed grey'
              }}
            >
              <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', px: 4 }}>
                [IMAGE SUGGESTION: Illustration of the 'Folded' vs 'Unfolded' 
                state of the SmartBox, highlighting its portability]
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <PortableWifiOff sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Field-Ready Design</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              The SmartBox is designed for maximum portability with a <strong>foldable 
              structure</strong>[cite: 29]. This allows users to easily transport the 
              kit for on-site testing in grocery stores, farms, or community gardens.
            </Typography>
            <Typography variant="h6" gutterBottom>Hardware Workflow:</Typography>
            <List>
              {[
                "Insert the induced biosensor tube into the appropriate adaptor[cite: 31, 139].",
                "Close the lid to seal out ambient light[cite: 30, 138].",
                "Activate the blue LED and capture the result through the orange filter using the BioAP software[cite: 136, 139]."
              ].map((step, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Typography variant="h6" color="primary">{index + 1}</Typography>
                  </ListItemIcon>
                  <ListItemText primary={step} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}