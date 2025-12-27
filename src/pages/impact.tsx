import React from 'react';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Stack,
  Divider,
  useTheme
} from '@mui/material';
import { 
  Favorite, 
  ShieldMoon, 
  Groups,
  EnergySavingsLeaf,
  WaterDrop,
  Recycling
} from '@mui/icons-material';

export default function ImpactPage(): JSX.Element {
  const theme = useTheme();

  return (
    <Layout title="Impact & Sustainability">
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'success.main', 
        color: 'white', 
        py: 8,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Impact & Sustainability
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Our project is built on a foundation of sustainability, driving measurable
            change across global health and safety standards.
          </Typography>
        </Container>
      </Box>

      {/* SDG Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
          Sustainable Development Goals (SDGs)
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
          {[
            { 
              goal: "SDG 3", 
              title: "Good Health & Well-Being", 
              desc: "Empowering consumers to detect residues that contribute to chronic risks like cancer, asthma, and Parkinson's disease.",
              icon: <Favorite sx={{ fontSize: 40 }} />,
              color: "#E5243B"
            },
            { 
              goal: "SDG 6", 
              title: "Clean Water & Sanitation", 
              desc: "Providing a rapid tool to monitor chemical runoff in soil and water samples to protect natural water systems.",
              icon: <WaterDrop sx={{ fontSize: 40 }} />,
              color: "#26BDE2"
            },
            { 
              goal: "SDG 12", 
              title: "Responsible Consumption", 
              desc: "Empowering individuals to make informed choices and verifying pesticide-free claims in produce.",
              icon: <Recycling sx={{ fontSize: 40 }} />,
              color: "#BF8B2E"
            },
            { 
              goal: "SDG 13", 
              title: "Climate Action", 
              desc: "Promoting sustainable agriculture by identifying over-reliance on chemical agents in local environments.",
              icon: <EnergySavingsLeaf sx={{ fontSize: 40 }} />,
              color: "#3F7E44"
            }
          ].map((sdg, index) => (
            <Box key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  textAlign: 'center', 
                  border: `2px solid ${sdg.color}`,
                  borderRadius: 4
                }}
              >
                <Box sx={{ color: sdg.color, mb: 2 }}>{sdg.icon}</Box>
                <Typography variant="h6" sx={{ color: sdg.color, fontWeight: 'bold' }}>{sdg.goal}</Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>{sdg.title}</Typography>
                <Typography variant="body2" color="text.secondary">{sdg.desc}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* Safety & Cell-Free Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <ShieldMoon sx={{ color: 'primary.main', mr: 1, fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Biosafety & Responsibility</Typography>
              </Box>
              <Typography variant="body1" paragraph>
                Safety is the cornerstone of PestiGuard. We exclusively utilized the 
                <strong> safe, non-pathogenic E. coli BL21 strain </strong> for all 
                experimental phases.
              </Typography>
              <Typography variant="body1" paragraph>
                Recognizing the regulatory hurdles of live GMOs in consumer products, we 
                developed a <strong> Cell-Free Protein Synthesis (CFPS) </strong> system 
                as a proactive next step.
              </Typography>
              <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 3, borderLeft: '5px solid #4CAF50' }}>
                <Typography variant="subtitle2" color="success.main" gutterBottom>
                  The Cell-Free Advantage:
                </Typography>
                <Typography variant="body2">
                  By removing the living host, we eliminate GMO concerns, increase 
                  public acceptance, and provide a faster detection environment.
                </Typography>
              </Box>
            </Box>
            <Box>
                            <Box sx={{ 
                height: 300, 
                bgcolor: 'white', 
                borderRadius: 4, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: 2,
                p: 4
              }}>
                <Typography variant="caption" color="text.secondary" align="center">
                  [IMAGE SUGGESTION: Comparison chart showing "Live Bacterial System" vs 
                  "Cell-Free System", highlighting the lack of GMO concerns in the latter]
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Community Impact Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={4}>
          <Box textAlign="center">
            <Groups sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Community Validation</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 4 }}>
            <Box>
              <Paper sx={{ p: 4, borderRadius: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>91%</Typography>
                <Typography variant="h6">User Satisfaction</Typography>
                <Typography variant="body2" color="text.secondary">
                  Our User Acceptance Testing (UAT) confirmed the platform is 
                  intuitive for non-technical community members.
                </Typography>
              </Paper>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>Real-World Success</Typography>
              <Typography variant="body1" paragraph>
                Our biosensor was validated against <strong>market-bought produce</strong> 
                and <strong>organic farm soil</strong>. It successfully identified 
                pre-existing residues on market samples and served as a definitive 
                negative control for organic verification.
              </Typography>
              <Typography variant="body1">
                PestiGuard moves high-precision sensing from professional laboratories 
                directly to the household, making food safety a transparent right for 
                everyone.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
}