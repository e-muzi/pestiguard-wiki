import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { motion } from 'motion/react';
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
      {/* Hero Header – same pattern as Development page */}
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="text.primary" gutterBottom sx={{ fontWeight: 800 }}>
            SmartBox: The Optical Environment
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A portable, 3D-printed enclosure designed to provide a dark, controlled 
            environment for precise fluorescence quantification.
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
              and a dedicated cover for placing samples.
            </Typography>
            <Typography variant="body1" paragraph>
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
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 12px 40px rgba(0,0,0,0.25)'
                    : '0 12px 40px rgba(0,0,0,0.08)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${bioBlue}, ${gfpGreen})`,
                    opacity: 0.9,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    pt: '3px',
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
                    src="/assets/hardware.png"
                    alt="3D CAD draft of the assembled SmartBox"
                    sx={{
                      maxHeight: 280,
                      width: 'auto',
                      objectFit: 'contain',
                      filter: theme.palette.mode === 'dark'
                        ? 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))'
                        : 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
                      transition: 'transform 0.35s ease',
                      '&:hover': { transform: 'scale(1.02)' },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1.5,
                      color: 'text.secondary',
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
                  samples. This precise light source is essential 
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
                  the emission signal. It blocks the blue 
                  excitation light, allowing the smartphone camera to capture 
                  only the green light intensity emitted by the biosensor.
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
                  borderRadius: 2,
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 20px 50px -12px rgba(0,0,0,0.4)'
                    : '0 20px 50px -12px rgba(0,0,0,0.15)',
                  '&:hover .hardware-advantage-img': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Box
                  className="hardware-advantage-img"
                  component="img"
                  src="/assets/hardware_flow.jpg"
                  alt="SmartBox foldable, field-ready design for on-site testing"
                  sx={{
                    display: 'block',
                    maxHeight: 300,
                    width: '100%',
                    objectFit: 'contain',
                    filter: theme.palette.mode === 'dark'
                      ? 'drop-shadow(0 10px 30px rgba(0,0,0,0.35))'
                      : 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                />
              </Box>
            </motion.div>
          </Box>
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <PortableWifiOff sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Field-Ready Design</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              The SmartBox is designed for maximum portability with a <strong>foldable 
              structure</strong>. This allows users to easily transport the 
              kit for on-site testing in grocery stores, farms, or community gardens.
            </Typography>
            <Typography variant="h6" gutterBottom>Hardware Workflow:</Typography>
            <List>
              {[
                "Insert the induced biosensor tube into the appropriate adaptor.",
                "Close the lid to seal out ambient light.",
                "Activate the blue LED and capture the result through the orange filter using the BioAP software."
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