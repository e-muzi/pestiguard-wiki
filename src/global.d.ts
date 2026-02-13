/// <reference types="@docusaurus/module-type-aliases" />

// Theme components resolved by Docusaurus bundler (not in module-type-aliases)
declare module '@theme/SkipToContent' {
  import type { ReactNode } from 'react';
  const SkipToContent: () => ReactNode;
  export default SkipToContent;
}

declare module '@theme/AnnouncementBar' {
  import type { ReactNode } from 'react';
  const AnnouncementBar: () => ReactNode;
  export default AnnouncementBar;
}

declare module '@theme/Navbar' {
  import type { ReactNode } from 'react';
  const Navbar: () => ReactNode;
  export default Navbar;
}

declare module '@theme/Footer' {
  import type { ReactNode } from 'react';
  const Footer: () => ReactNode;
  export default Footer;
}

declare module '@theme/Layout/Provider' {
  import type { ReactNode } from 'react';
  interface LayoutProviderProps {
    readonly children: ReactNode;
  }
  const LayoutProvider: (props: LayoutProviderProps) => ReactNode;
  export default LayoutProvider;
}

declare module '@theme/ErrorPageContent' {
  import type { ReactNode } from 'react';
  import type { FallbackParams } from '@docusaurus/ErrorBoundary';
  const ErrorPageContent: (props: FallbackParams) => ReactNode;
  export default ErrorPageContent;
}

declare module '@theme/Navbar/ColorModeToggle' {
  import type { ReactNode } from 'react';
  const NavbarColorModeToggle: () => ReactNode;
  export default NavbarColorModeToggle;
}

declare module '@theme/Navbar/MobileSidebar' {
  import type { ReactNode } from 'react';
  const NavbarMobileSidebar: () => ReactNode;
  export default NavbarMobileSidebar;
}

declare module '@theme/Icon/Menu' {
  import type { ReactNode } from 'react';
  const IconMenu: () => ReactNode;
  export default IconMenu;
}

// Augment @theme/Layout Props (base only has children)
declare module '@theme/Layout' {
  export interface Props {
    readonly children?: React.ReactNode;
    readonly title?: string;
    readonly description?: string;
    readonly noFooter?: boolean;
    readonly wrapperClassName?: string;
  }
}
