/**
 * Organic / Natural design system tokens.
 * Single source of truth for colors, shadows, radii, and typography.
 * Use in MUI theme and component sx props; CSS variables in custom.css stay in sync for global styles.
 */

export const colors = {
  background: '#FDFCF8',
  foreground: '#2C2C24',
  primary: '#5D7052',
  primaryForeground: '#F3F4F1',
  secondary: '#C18C5D',
  secondaryForeground: '#FFFFFF',
  accent: '#E6DCCD',
  accentForeground: '#4A4A40',
  muted: '#F0EBE5',
  mutedForeground: '#78786C',
  border: '#DED8CF',
  destructive: '#A85448',
  /** Card/container background - slightly warmer than page */
  card: '#FEFEFA',
} as const;

export const shadows = {
  soft: '0 4px 20px -2px rgba(93, 112, 82, 0.15)',
  softHover: '0 20px 40px -10px rgba(93, 112, 82, 0.15)',
  float: '0 10px 40px -10px rgba(193, 140, 93, 0.2)',
  button: '0 4px 20px -2px rgba(93, 112, 82, 0.15)',
  buttonHover: '0 6px 24px -4px rgba(93, 112, 82, 0.25)',
} as const;

/** Organic blob border-radius values (CSS border-radius: x y; pairs) */
export const organicRadii = [
  '60% 40% 30% 70% / 60% 30% 70% 40%',
  '30% 70% 70% 30% / 30% 30% 70% 70%',
  '50% 50% 30% 70% / 55% 45% 55% 45%',
  '70% 30% 50% 50% / 40% 60% 40% 60%',
  '40% 60% 60% 40% / 60% 40% 60% 40%',
  '55% 45% 60% 40% / 50% 50% 50% 50%',
] as const;

/** Asymmetric card corner radii (Tailwind-style: tl, tr, br, bl in rem) for variety */
export const cardRadii = [
  { borderTopLeftRadius: '4rem', borderTopRightRadius: '2rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '2rem' },
  { borderTopLeftRadius: '2rem', borderTopRightRadius: '4rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '2rem' },
  { borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomRightRadius: '4rem', borderBottomLeftRadius: '2rem' },
  { borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '4rem' },
  { borderTopLeftRadius: '2rem', borderTopRightRadius: '3rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '3rem' },
  { borderTopLeftRadius: '3rem', borderTopRightRadius: '2rem', borderBottomRightRadius: '3rem', borderBottomLeftRadius: '2rem' },
] as const;

export const typography = {
  fontFamilyHeading: '"Fraunces", Georgia, serif',
  fontFamilyBody: '"Nunito", system-ui, sans-serif',
} as const;

export const transitions = {
  default: 'all 0.3s ease',
  slow: 'all 0.5s ease',
  hover: 'all 0.3s ease',
} as const;
