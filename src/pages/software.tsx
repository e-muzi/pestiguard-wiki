import React from 'react';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Chip, 
  Stack,
  Divider,
  useTheme
} from '@mui/material';
import { 
  Smartphone, 
  Storage, 
  Psychology, 
  Assessment,
  Code
} from '@mui/icons-material';

export default function SoftwarePage(): JSX.Element {
  const theme = useTheme();

  // Branding Colors
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  return (
    <Layout title="Software: BioAP Platform">
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        pt: 10, 
        pb: 8, 
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: `radial-gradient(circle at 90% 10%, rgba(0, 176, 255, 0.1) 0%, rgba(255,255,255,1) 100%)`
      }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Smartphone sx={{ fontSize: 60, color: bioBlue, mb: 2 }} />
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              BioAP Platform
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Our custom-built analysis software that translates biological 
              fluorescence into actionable safety data.
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
              <Chip label="React / TypeScript" variant="outlined" icon={<Code />} />
              <Chip label="Flask Backend" variant="outlined" icon={<Storage />} />
              <Chip label="Computer Vision" variant="outlined" icon={<Psychology />} />
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* System Architecture */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
              Full-Stack Architecture
            </Typography>
            <Typography variant="body1" paragraph>
              The BioAP platform is built using a modern decoupled architecture to ensure 
              speed and scalability. The <strong>React/TypeScript</strong> frontend 
              provides a seamless user experience, while the <strong>Flask (Python)</strong> 
              backend handles the heavy lifting of image processing and data calculation.
            </Typography>
            <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 4, border: '1px solid #e0e0e0' }}>
              <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>
                Data Flow:
              </Typography>
              <Typography variant="body2">
                1. User captures fluorescence via Smartphone camera.<br />
                2. Image is securely uploaded to the Flask API.<br />
                3. The CV Engine calculates RGB Optical Density.<br />
                4. Concentration results are returned in &lt; 2 seconds.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: 350, 
                bgcolor: 'grey.900', 
                borderRadius: 4, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: 4
              }}
            >
              <Typography variant="caption" color="grey.500" align="center" sx={{ px: 4 }}>
                [IMAGE SUGGESTION: A technical architecture diagram showing the 
                Mobile App interacting with the Cloud Server and Database]
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* CV Algorithm Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Psychology sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>The CV Engine</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                At the heart of BioAP is our Computer Vision algorithm. It analyzes 
                the <strong>RGB Optical Density</strong> of the captured image, 
                specifically targeting the green spectrum emitted by the EGFP reporter.
              </Typography>
              <Typography variant="body1" paragraph>
                By correlating the pixel intensity with our pre-loaded <strong>Standard 
                Curves</strong>, the software can accurately estimate the concentration 
                of Glyphosate or Acephate in the sample.
              </Typography>
              <Chip label="High Accuracy" color="success" size="small" sx={{ mr: 1 }} />
              <Chip label="Low Latency" color="success" size="small" />
            </Box>
            <Box>
              <Box 
                sx={{ 
                  height: 300, 
                  bgcolor: 'white', 
                  borderRadius: 4, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid #ddd',
                  p: 2
                }}
              >
                <Typography variant="caption" color="text.secondary" align="center">
                  [IMAGE SUGGESTION: A split-screen visual showing an 'Original Image' 
                  of a glowing tube vs. the 'Processed Mask' used by the algorithm]
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* UAT Results Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Assessment sx={{ fontSize: 40, color: bioBlue, mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>User Acceptance Testing (UAT)</Typography>
          <Typography variant="body1" color="text.secondary">
            Validating the software with real users in the community.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {[
            { label: "Ease of Use", value: "94%", desc: "Users found the navigation intuitive." },
            { label: "Speed", value: "98%", desc: "Instant results provided within seconds." },
            { label: "Clarity", value: "91%", desc: "Information/Safety warnings were easy to understand." }
          ].map((stat, index) => (
            <Box key={index}>
              <Paper variant="outlined" sx={{ p: 4, textAlign: 'center', borderRadius: 4 }}>
                <Typography variant="h3" sx={{ color: gfpGreen, fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
                <Typography variant="h6" gutterBottom>{stat.label}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.desc}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
        
        <Box mt={6} textAlign="center">
          <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            "The PestiGuard app is as simple as taking a photo, yet provides 
            lab-grade information I can actually use." — UAT Participant
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}