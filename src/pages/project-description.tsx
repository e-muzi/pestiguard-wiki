import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import { 
  PsychologyAlt, 
  TrackChanges, 
  Science, 
  CheckCircleOutline,
  KeyboardDoubleArrowRight
} from '@mui/icons-material';

export default function ProjectDescription(): JSX.Element {
  const theme = useTheme();

  // Branding Colors
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  return (
    <Layout title="Project Description">
      {/* Header Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Project Description
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8 }}>
            Bridging the gap between synthetic biology and consumer safety through 
            the development of a portable, cell-free pesticide biosensor.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 6 }}>
          {/* Main Content Column */}
          <Box>
            
            {/* 1. Inspiration Section */}
            <Box mb={6}>
              <Box display="flex" alignItems="center" mb={2}>
                <PsychologyAlt sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Inspiration</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                The widespread use of pesticides in modern agriculture has led to 
                unprecedented environmental and health concerns. Chemical residues 
                from agents like <strong>Glyphosate</strong> and <strong>Acephate</strong> 
                persist in our food chain, linked to chronic conditions such as 
                respiratory issues and neurodegenerative diseases.
              </Typography>
              <Typography variant="body1" paragraph>
                While governmental regulations exist, the average consumer has no way 
                to verify the safety of their produce at home. Standard laboratory 
                techniques like <strong>HPLC</strong> or <strong>GC-MS</strong> are 
                prohibitively expensive and slow, requiring days for results. We were 
                inspired to create a tool that moves high-precision sensing from the 
                lab to the kitchen counter.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 2. Abstract & Goal */}
            <Box mb={6}>
              <Box display="flex" alignItems="center" mb={2}>
                <TrackChanges sx={{ color: bioBlue, mr: 1, fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Goal</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                PestiGuard aims to democratize food safety. By utilizing synthetic 
                biology, we have developed a <strong>cell-free biosensor</strong> 
                that detects specific pesticide molecules through RNA aptamer binding. 
                Our system provides a visual fluorescence-based result that is 
                quantified via a smartphone app, ensuring that anyone, anywhere, 
                can monitor the safety of their food.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 3. Proposed Implementation */}
            <Box mb={6}>
              <Box display="flex" alignItems="center" mb={2}>
                <Science sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Proposed Implementation</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                The PestiGuard system follows a three-step workflow designed for 
                ease of use:
              </Typography>
              
              <List>
                {[
                  { title: "Sample Preparation", text: "Wash produce with a specialized buffer to extract surface pesticide residues." },
                  { title: "Biosensor Reaction", text: "Add the extract to our SmartBox containing the genetic circuit; binding triggers a change in GFP expression." },
                  { title: "Software Analysis", text: "Capture an image with the BioAP app to receive an instant toxicity report based on fluorescence intensity." }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ mt: 1 }}>
                      <CheckCircleOutline sx={{ color: gfpGreen }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<strong>{item.title}</strong>} 
                      secondary={item.text} 
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          {/* Sidebar Info Column */}
          <Box>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                bgcolor: 'grey.50', 
                borderRadius: 4, 
                border: `1px solid ${theme.palette.divider}`,
                position: 'sticky',
                top: 100
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                At a Glance
              </Typography>
              
              <Box mb={3}>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  PRIMARY TARGETS
                </Typography>
                <Stack direction="column" spacing={1}>
                  <Box display="flex" alignItems="center">
                    <KeyboardDoubleArrowRight sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="body2">Glyphosate (Herbicide)</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <KeyboardDoubleArrowRight sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="body2">Acephate (Insecticide)</Typography>
                  </Box>
                </Stack>
              </Box>

              <Box mb={3}>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  TECHNOLOGY
                </Typography>
                <Typography variant="body2">
                  Synthetic Genetic Circuits, RNA Aptamers, Cell-Free Expression (CFE).
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  INTENDED USERS
                </Typography>
                <Typography variant="body2">
                  Households, Small-scale Farmers, and Food Safety Inspectors.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

// Utility Stack component if not imported from MUI
function Stack({ children, spacing, direction }: any) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: direction || 'column', 
        gap: spacing || 1 
      }}
    >
      {children}
    </Box>
  );
}