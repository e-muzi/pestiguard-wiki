import React from 'react';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Divider, 
  Chip,
  Stack,
  useTheme
} from '@mui/material';
import { 
  Computer, 
  Science, 
  AutoGraph, 
  Hub,
  CompareArrows
} from '@mui/icons-material';

export default function SciencePage(): JSX.Element {
  const theme = useTheme();

  // Branding Colors
  const gfpGreen = '#4CAF50';
  const bioBlue = '#00B0FF';

  return (
    <Layout title="Science & Development">
      {/* Hero Header */}
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="text.primary" gutterBottom sx={{ fontWeight: 800 }}>
            Science & Development
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            From molecular simulations to bench-top validation: The engineering 
            cycle behind the PestiGuard biosensor.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={3}>
            <Chip icon={<Computer />} label="Computational Modeling" variant="outlined" />
            <CompareArrows />
            <Chip icon={<Science />} label="Wet Lab Validation" variant="outlined" />
          </Box>
        </Container>
      </Box>

      {/* 1. Dry Lab: Computational Design */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Hub sx={{ color: bioBlue, mr: 1, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Dry Lab: Molecular Blueprint</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Before entering the lab, we utilized <strong>Molecular Dynamics (MD)</strong> simulations 
              to predict the interaction between our target pesticides and DNA-derived RNA aptamers.
            </Typography>
            <Typography variant="body1" paragraph>
              Using tools like <strong>GROMACS</strong> and <strong>CHARMM-GUI</strong>, we simulated 
              the folding patterns of our aptamers. Our focus was on measuring the binding affinity 
              of <i>Glyphosate</i> and <i>Acephate</i> to ensure the RNA sequence would undergo the 
              necessary conformational change to block the Ribosome Binding Site (RBS).
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, bgcolor: 'rgba(0, 176, 255, 0.05)', borderColor: bioBlue }}>
              <Typography variant="subtitle2" color="primary">Key Computational Insight:</Typography>
              <Typography variant="body2">
                Simulations confirmed that the target pesticides bind to the aptamer with high 
                specificity, creating a steric hindrance that successfully inhibits 
                downstream protein translation.
              </Typography>
            </Paper>
          </Box>
          <Box>
            {/* IMAGE SUGGESTION: RNA folding simulation / GROMACS output graph */}
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
                [IMAGE SUGGESTION: Insert 3D rendering of the RNA Aptamer folding or 
                the RMSD/Binding Energy graphs from GROMACS simulations]
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* 2. Wet Lab: Genetic Engineering */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Science sx={{ color: gfpGreen, mr: 1, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Wet Lab: Biological Execution</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Our wet lab work focused on constructing a robust genetic circuit within 
              <i> E. coli</i> BL21. We engineered a system where the <strong>T7 promoter</strong> 
              drives the expression of fluorescent reporters (EGFP/RFP).
            </Typography>
            <Typography variant="h6" color={gfpGreen} gutterBottom>The Inverse Signaling Mechanism</Typography>
            <Typography variant="body1" paragraph>
              Unlike traditional sensors, PestiGuard uses an "Inverse" logic:
              <br />• <strong>No Pesticide:</strong> Translation occurs normally → High Fluorescence.
              <br />• <strong>Pesticide Present:</strong> Pesticide binds to the aptamer → RBS is blocked → Low Fluorescence.
            </Typography>
            <Typography variant="body1">
              We also transitioned to a <strong>Cell-Free System</strong> to bypass the 
              regulatory hurdles of GMOs, providing a faster and safer detection environment.
            </Typography>
          </Box>
          <Box>
            {/* IMAGE SUGGESTION: Genetic Circuit Diagram */}
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
                [IMAGE SUGGESTION: Insert the PestiGuard Genetic Circuit Diagram showing 
                the T7 promoter, Aptamer, and Reporter Gene sequence]
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* 3. Results: Validation & Data */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <AutoGraph sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Results & Validation</Typography>
            <Typography variant="body1" color="text.secondary">
              Real-world performance data for Glyphosate and Acephate detection.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {/* Sensitivity Results */}
            <Box>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>Standard Curve Analysis</Typography>
                <Box 
                  sx={{ 
                    height: 200, 
                    bgcolor: 'white', 
                    mb: 2, 
                    borderRadius: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #eee'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    [Insert Graph: Fluorescence vs. Concentration]
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Our validation showed a clear linear decrease in fluorescence as pesticide 
                  concentration increased, confirming the accuracy of our biosensor.
                </Typography>
              </Paper>
            </Box>

            {/* Specificity Results */}
            <Box>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>Specificity Testing</Typography>
                <Box 
                  sx={{ 
                    height: 200, 
                    bgcolor: 'white', 
                    mb: 2, 
                    borderRadius: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #eee'
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    [Insert Bar Chart: Cross-reactivity results]
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Testing against non-target chemicals demonstrated that our aptamers 
                  are highly selective, ensuring no false positives from other agricultural runoff.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}