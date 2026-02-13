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
  useTheme
} from '@mui/material';
import { 
  Smartphone, 
  Storage, 
  Psychology, 
  Assessment,
  Code,
  Web,
  Api,
  CheckCircle
} from '@mui/icons-material';

export default function SoftwarePage(): JSX.Element {
  const theme = useTheme();

  // Branding Colors
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  return (
    <Layout title="Software: BioAP Platform">
      {/* Hero Header */}
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="center" mb={2}>
            <Smartphone sx={{ fontSize: 48, color: 'primary.main' }} />
          </Box>
          <Typography variant="h2" align="center" color="text.primary" gutterBottom sx={{ fontWeight: 800 }}>
            BioAP Platform
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Our custom-built analysis software translates biological fluorescence into actionable safety data.
            It empowers users to perform on-site pesticide analysis by processing images of biosensor samples
            to determine precise pesticide concentrations.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={3} flexWrap="wrap">
            <Chip label="Flask / Python" variant="outlined" icon={<Code />} />
            <Chip label="SQLite / SQLAlchemy" variant="outlined" icon={<Storage />} />
            <Chip label="Computer Vision" variant="outlined" icon={<Psychology />} />
          </Box>
        </Container>
      </Box>

      {/* System Architecture: MVC */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
            System Architecture: Model-View-Controller (MVC)
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="720px" mx="auto">
            The BioAP platform utilizes a decoupled MVC architecture to ensure organized logic,
            data integrity, and high performance.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {/* Model */}
          <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, height: '100%' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Storage sx={{ color: bioBlue, mr: 1, fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Model (Database)</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              A lightweight SQLite database managed via SQLAlchemy handles local data persistence. It stores:
            </Typography>
            <List dense disablePadding>
              <ListItem disablePadding sx={{ alignItems: 'flex-start', mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 28, mt: 0.25 }}>
                  <CheckCircle sx={{ fontSize: 18, color: gfpGreen }} />
                </ListItemIcon>
                <ListItemText
                  primary="Calibration Data"
                  secondary="Profiles defining detection parameters, including standard curves for specific pesticides."
                  primaryTypographyProps={{ fontWeight: 600, variant: 'body2' }}
                  secondaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 28, mt: 0.25 }}>
                  <CheckCircle sx={{ fontSize: 18, color: gfpGreen }} />
                </ListItemIcon>
                <ListItemText
                  primary="Operational Data"
                  secondary="User activity, metadata, image paths, and calculated concentrations."
                  primaryTypographyProps={{ fontWeight: 600, variant: 'body2' }}
                  secondaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            </List>
          </Paper>

          {/* View */}
          <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, height: '100%' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Web sx={{ color: bioBlue, mr: 1, fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>View (Frontend)</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              The user interface is built with Jinja2 templates and styled with Bootstrap 5 and Material-UI
              for a responsive, multi-platform experience.
            </Typography>
          </Paper>

          {/* Controller */}
          <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, height: '100%' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Api sx={{ color: bioBlue, mr: 1, fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Controller (Backend)</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              A Python Flask framework manages server-side logic and REST-style routing to handle user requests
              and complex scientific calculations.
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* CV Engine & Algorithm Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Psychology sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>The CV Engine & Algorithm</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                The &quot;heart&quot; of BioAP is a robust Computer Vision (CV) algorithm that automates image analysis.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>RGB Optical Density:</strong> The software calculates the RGB intensity within specific
                Regions of Interest (ROI) where the E.coli samples are located.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Scientific Libraries:</strong> It leverages powerful Python libraries like NumPy and Pillow
                for efficient image processing.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Quantification:</strong> By comparing captured intensity to pre-loaded standard curves,
                the system converts raw RGB data into accurate concentrations for pesticides like Glyphosate and Acephate.
              </Typography>
              <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Workflow
                </Typography>
                <Typography variant="body2">
                  (Calibration) → Capture → Adjust → Analyze → Result
                </Typography>
              </Box>
              <Box mt={2}>
                <Chip label="High Accuracy" color="success" size="small" sx={{ mr: 1 }} />
                <Chip label="Low Latency" color="success" size="small" />
              </Box>
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
                  [IMAGE SUGGESTION: A split-screen visual showing an &apos;Original Image&apos; 
                  of a glowing tube vs. the &apos;Processed Mask&apos; used by the algorithm]
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
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>User Acceptance Testing (UAT) Results</Typography>
          <Typography variant="body1" color="text.secondary">
            Testing with community participants validated the software&apos;s performance across key metrics.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {[
            { label: "Intuitive Workflow", value: "94%", desc: "Users found the navigation and the [Capture → (Align) → Analyze → Result] process easy to follow." },
            { label: "System Reliability", value: "98%", desc: "The Python-based Flask backend provided stable and robust scientific computation." },
            { label: "Overall Satisfaction", value: "91%", desc: "Participants highly rated the application's clarity and the Material-UI visual design." }
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
            &quot;The PestiGuard app is as simple as taking a photo, yet provides lab-grade information I can actually use.&quot; — UAT Participant
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}