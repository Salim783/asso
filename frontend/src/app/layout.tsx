import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { ReactNode } from 'react';
import { AppShell } from '@/Components/containers';
import { getCurrentLocaleData } from '@/translations/server';
import ThemeRegistry from './ThemeRegistry';
import './globals.css';

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const cormorant = Cormorant_Garamond({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata = {
  title: 'MIA',
  description: 'Association MIA en France et au Maroc.',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const { locale, locales, messages } = await getCurrentLocaleData();

  return (
    <html lang={locale} className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <ThemeRegistry>
          <AppShell locale={locale} locales={locales} messages={messages}>
            {children}
          </AppShell>
        </ThemeRegistry>
      </body>
    </html>
  );
}
