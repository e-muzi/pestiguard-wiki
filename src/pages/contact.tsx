import React, { useState } from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import {
  Box,
  Container,
  Typography,
  Collapse,
} from '@mui/material';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { colors, shadows, typography } from '../theme/design-tokens';

const heroIconSx = {
  width: 48,
  height: 48,
  borderRadius: '1rem',
  bgcolor: `${colors.primary}18`,
  color: colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

const FAQ_ITEMS = [
  {
    question: 'What is PestiGuard?',
    answer:
      'PestiGuard is an innovative biosensor designed to empower consumers to detect pesticide residues directly in their food. It uses a genetic circuit that provides a quantifiable visual output to indicate the presence of harmful chemicals.',
  },
  {
    question: 'How does the biosensor actually work?',
    answer:
      'The sensor uses an RNA aptamer that binds to specific pesticides. When binding occurs, it triggers a structural change that blocks the ribosome from producing a fluorescent protein. This means a dimmer signal indicates a higher concentration of pesticides.',
  },
  {
    question: 'Which pesticides can PestiGuard detect?',
    answer:
      'Our current platform has been conclusively validated to detect Glyphosate and Acephate with high specificity and reliability. We are continuing to optimize the system for other pesticides like Malathion and Chlorpyrifos.',
  },
  {
    question: 'Is the device portable?',
    answer:
      'Yes! We designed the "SmartBox", a compact, 3D-printed enclosure that provides a standardized environment for testing. It is lightweight, cost-effective, and easy to carry for on-site analysis.',
  },
  {
    question: 'How do I read the results?',
    answer:
      'Results are analyzed through our custom software, the PestiGuard Biosensor Analysis Platform (BioAP). You simply take a photo of the test sample with your smartphone, and the app calculates the precise pesticide concentration by comparing it to a calibrated reference.',
  },
  {
    question: 'How long does a test take?',
    answer:
      'Currently, the cell-free biosensor requires 6-8 hours waiting time to produce a reliable signal.',
  },
  {
    question: 'Can I use it on different types of vegetables?',
    answer:
      'Yes, we have successfully validated PestiGuard on several common vegetables, including Green Chinese Cabbage, Chinese Lettuce, and Chinese Flowering Cabbage. The biosensor maintains accuracy even within these complex food matrices.',
  },
  {
    question: 'Is PestiGuard safe to use?',
    answer:
      'While our current prototype uses a safe, non-pathogenic strain of E. coli (BL21), we are transitioning toward a cell-free protein synthesis (CFPS) system. This will remove the need for live genetically modified organisms (GMOs) in the final consumer product.',
  },
  {
    question: 'Any patent?',
    answer:
      'Since we are a high school joint school team, we are still seeking investment for our project. We currently do not have the funding for a patent, but we are looking for partners to help us protect and scale this technology.',
  },
  {
    question: 'Who are our target customers?',
    answer:
      'Our target customers are small farmers and government agencies, while also households who want to ensure the safety of their food.',
  },
  {
    question: 'How do I get in touch with the PestiGuard team?',
    answer:
      'You can reach us at e.lokyeeli@gmail.com or clxwpj99@gmail.com for general inquiries, partnerships, media, or technical support. We typically respond within 1–2 business days.',
  }
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Box
        component="button"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        sx={{
          width: '100%',
          textAlign: 'left',
          border: 'none',
          cursor: 'pointer',
          p: 0,
          m: 0,
          background: 'none',
          font: 'inherit',
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: colors.primary,
            outlineOffset: 2,
            borderRadius: '1.5rem',
          },
        }}
      >
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: '2rem',
            border: `1px solid ${colors.border}80`,
            bgcolor: colors.card,
            boxShadow: shadows.soft,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: shadows.softHover,
              bgcolor: colors.background,
              borderColor: `${colors.border}`,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: typography.fontFamilyHeading,
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.0625rem' },
                color: colors.foreground,
                lineHeight: 1.4,
                flex: 1,
              }}
            >
              {question}
            </Typography>
            <Box
              sx={{
                flexShrink: 0,
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: `${colors.primary}14`,
                color: colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                ...(isOpen && {
                  bgcolor: colors.primary,
                  color: colors.primaryForeground,
                }),
              }}
            >
              <ChevronDown size={22} strokeWidth={2} />
            </Box>
          </Box>

          <Collapse in={isOpen}>
            <Box sx={{ pt: 2, mt: 1, borderTop: isOpen ? `1px solid ${colors.border}60` : 'none' }}>
              <Typography
                sx={{
                  fontFamily: typography.fontFamilyBody,
                  fontSize: { xs: '0.9375rem', sm: '1rem' },
                  color: colors.mutedForeground,
                  lineHeight: 1.7,
                }}
              >
                {answer}
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Contact(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout title="Contact | PestiGuard Wiki">
      <Box sx={{ py: 2, pb: 8 }}>
        <PageHero
          title="Contact"
          subtitle="Erica Li: e.lokyeeli@gmail.com | Kelly Wu: clxwpj99@gmail.com"
          icon={
            <Box sx={heroIconSx}>
              <Mail size={26} strokeWidth={2} />
            </Box>
          }
        />
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '1rem',
                bgcolor: `${colors.primary}18`,
                color: colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HelpCircle size={24} strokeWidth={2} />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: typography.fontFamilyHeading,
                fontWeight: 600,
                color: colors.foreground,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
                index={index}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
