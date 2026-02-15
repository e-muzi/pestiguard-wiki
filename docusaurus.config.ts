import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'PestiGuard',
  tagline: 'Empowering consumers to see the unseen.',
  url: 'https://pestiguard.wiki',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pestiguard',
  projectName: 'wiki',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    navbar: {
      title: 'PestiGuard',
      items: [
        {to: '/project-description', label: 'Project', position: 'left'},
        {to: '/development', label: 'Development', position: 'left'},
        {to: '/hardware', label: 'Hardware', position: 'left'},
        {to: '/software', label: 'Software', position: 'left'},
        {to: '/usage', label: 'Usage', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} PestiGuard.`,
    },
  },
};

export default config;

