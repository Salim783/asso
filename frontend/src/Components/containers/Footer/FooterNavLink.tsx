'use client';

import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import { footerLinkStyles } from './Footer.styles';

type FooterNavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function FooterNavLink({ href, children }: FooterNavLinkProps) {
  return (
    <Link component={NextLink} href={href} underline="hover" sx={footerLinkStyles}>
      {children}
    </Link>
  );
}
