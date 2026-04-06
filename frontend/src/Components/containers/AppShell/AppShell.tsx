import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import type { Locale, LocaleOption, Messages } from '@/translations/catalogs';
import Footer from '../Footer';
import Header from '../Header';
import { appShellClasses, appShellStyles } from './AppShell.styles';

type AppShellProps = {
  children: ReactNode;
  locale: Locale;
  locales: LocaleOption[];
  messages: Pick<Messages, 'common' | 'footer' | 'header' | 'languageSwitcher'>;
};

export default function AppShell({ children, locale, locales, messages }: AppShellProps) {
  return (
    <Box className={appShellClasses.root} sx={appShellStyles[appShellClasses.root]}>
      <Header
        locale={locale}
        locales={locales}
        common={messages.common}
        header={messages.header}
        languageSwitcher={messages.languageSwitcher}
      />
      <Box component="main" className={appShellClasses.main} sx={appShellStyles[appShellClasses.main]}>
        {children}
      </Box>
      <Footer common={messages.common} footer={messages.footer} />
    </Box>
  );
}
