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
    <Layout title="Contact">
      <Box sx={{ minHeight: '100%', bgcolor: colors.background, pb: { xs: 4, md: 8 } }}>
        <PageHero
          title="Contact"
          subtitle="s2021060@cpu.edu.hk"
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
