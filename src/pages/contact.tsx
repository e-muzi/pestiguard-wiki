import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'motion/react';

const PALETTE = {
  cream: '#F1F3E0',
  lightSage: '#D2DCB6',
  mutedGreen: '#A1BC98',
  darkSage: '#778873',
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const FAQ_ITEMS = [
  {
    question: 'How do I get in touch with the PestiGuard team?',
    answer:
      'You can reach us at hello@pestiguard.com for general inquiries, partnerships, media, or technical support. We typically respond within 1–2 business days.',
  },
  {
    question: 'Where can I find documentation and science details?',
    answer:
      'This wiki is the central hub for PestiGuard. Use the sidebar or navbar to explore Project, Development, Hardware, Software, and Usage pages for full documentation and science.',
  },
  {
    question: 'Is PestiGuard available for purchase or pilot programs?',
    answer:
      'For licensing, pilot programs, or collaboration opportunities, please email hello@pestiguard.com with a short description of your interest. We welcome partnerships with researchers, educators, and food-safety organizations.',
  },
  {
    question: 'How can I contribute or join the community?',
    answer:
      'PestiGuard is part of the iGEM and synthetic biology community. Check our main project page and iGEM wiki for community channels, outreach events, and contribution guidelines.',
  },
];

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
      <Box
        sx={{
          minHeight: '100%',
          bgcolor: PALETTE.cream,
          py: { xs: 4, md: 8 },
        }}
      >
        {/* Upper Section: Contact Branding */}
        <Container maxWidth="md" sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: PALETTE.darkSage,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
              }}
            >
              Contact us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: PALETTE.mutedGreen,
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              hello@pestiguard.com
            </Typography>
          </motion.div>
        </Container>

        {/* Lower Section: FAQ Accordion */}
        <Container maxWidth="md">
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: PALETTE.darkSage,
              mb: 3,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box
            sx={{
              '& .MuiAccordion-root': {
                bgcolor: 'transparent',
                backgroundImage: 'none',
                boxShadow: 'none',
                '&::before': { display: 'none' },
                borderBottom: `1px solid ${PALETTE.lightSage}`,
                '&:last-of-type': { borderBottom: `1px solid ${PALETTE.lightSage}` },
              },
              '& .MuiAccordionSummary-root': {
                minHeight: 56,
                '&:hover': { bgcolor: PALETTE.lightSage },
                transition: 'background-color 0.2s ease',
              },
              '& .MuiAccordionSummary-content': { margin: '12px 0' },
              '& .MuiAccordionDetails-root': { pt: 0, pb: 2, px: 3 },
            }}
          >
            {FAQ_ITEMS.map((item, index) => (
              <Accordion key={index} disableGutters>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: PALETTE.mutedGreen }} />
                  }
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: PALETTE.darkSage,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
