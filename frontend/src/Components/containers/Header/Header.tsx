'use client';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useTransition } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '@/assets/logoMIA.png';
import { AppButton } from '@/Components/design-system';
import useDisclosure from '@/hooks/useDisclosure';
import { LOCALE_COOKIE_NAME } from '@/translations/constants';
import type { Locale, LocaleOption, Messages } from '@/translations/catalogs';
import {
  headerClasses,
  headerLocaleSwitchStyles,
  headerLogoBadgeStyles,
  headerLogoLinkStyles,
  headerLogoTitleStyles,
  headerMobileLocaleSwitchStyles,
  headerNavGroupStyles,
  headerRootStyles,
  getHeaderNavLinkStyles,
  getHeaderSurfaceStyles,
} from './Header.styles';

type NavLinkProps = {
  href: string;
  label: string;
  pathname: string;
};

function NavLink({ href, label, pathname }: NavLinkProps) {
  const isActive = href.startsWith('/#') ? pathname === '/' : href === pathname;

  return (
    <AppButton href={href} color="inherit" sx={getHeaderNavLinkStyles(isActive)}>
      {label}
    </AppButton>
  );
}

type NavigationItem = {
  href: string;
  label: string;
};

type HeaderProps = {
  locale: Locale;
  locales: LocaleOption[];
  common: Messages['common'];
  header: Messages['header'];
  languageSwitcher: Messages['languageSwitcher'];
};

export default function Header({ locale, locales, common, header, languageSwitcher }: HeaderProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenu = useDisclosure(false);
  const [isPending, startTransition] = useTransition();
  const navigation = header.navigation as NavigationItem[];
  const associations = header.associations as NavigationItem[];

  useEffect(() => {
    mobileMenu.close();
  }, [mobileMenu.close, pathname]);

  const handleLocaleChange = (_event: MouseEvent<HTMLElement>, nextLocale: string | null) => {
    if (!nextLocale || nextLocale === locale) {
      return;
    }

    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  const renderLocaleSwitch = (options: LocaleOption[], mobile = false) => (
    <ToggleButtonGroup
      size="small"
      exclusive
      disabled={isPending}
      value={locale}
      onChange={handleLocaleChange}
      aria-label={languageSwitcher.ariaLabel}
      className={headerClasses.localeSwitch}
      sx={mobile ? headerMobileLocaleSwitchStyles : headerLocaleSwitchStyles}
    >
      {options.map((item) => (
        <ToggleButton key={item.value} value={item.value}>
          {item.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );

  return (
    <Box component="header" className={headerClasses.root} sx={headerRootStyles}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100%',
          maxWidth: '100%',
          px: { xs: 0, md: 0 },
        }}
      >
        <Paper elevation={0} className={headerClasses.surface} sx={getHeaderSurfaceStyles(theme)}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Stack
                component={Link}
                href="/"
                direction="row"
                spacing={1.5}
                sx={headerLogoLinkStyles}
              >
                <Box className={headerClasses.logoBadge} sx={headerLogoBadgeStyles}>
                  <Image src={logo} alt="Logo MIA" width={40} height={40} priority />
                </Box>
                <Stack spacing={0.2}>
                  <Typography variant="h5" sx={headerLogoTitleStyles}>
                    {common.associationName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {common.associationTagline}
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Stack
                  direction="row"
                  spacing={0.5}
                  className={headerClasses.navGroup}
                  sx={headerNavGroupStyles}
                >
                  {navigation.map((item) => (
                    <NavLink key={item.href} pathname={pathname} {...item} />
                  ))}
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="row" spacing={1}>
                  {associations.map((item, index) => (
                    <AppButton
                      key={item.href}
                      href={item.href}
                      variant={pathname === item.href ? 'contained' : 'text'}
                      color={index === 1 ? 'secondary' : 'primary'}
                    >
                      {item.label}
                    </AppButton>
                  ))}
                </Stack>
                {renderLocaleSwitch(locales as LocaleOption[])}
              </Stack>

              <IconButton
                onClick={mobileMenu.toggle}
                aria-label={header.menuAriaLabel}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              >
                {mobileMenu.isOpen ? <FiX /> : <FiMenu />}
              </IconButton>
            </Stack>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Collapse in={mobileMenu.isOpen}>
                <Stack spacing={2} sx={{ pt: 1 }}>
                  <Divider />
                  <Stack spacing={1}>
                    {navigation.map((item) => (
                      <NavLink key={item.href} pathname={pathname} {...item} />
                    ))}
                  </Stack>
                  <Stack spacing={1}>
                    {associations.map((item, index) => (
                      <AppButton
                        key={item.href}
                        href={item.href}
                        variant={pathname === item.href ? 'contained' : 'outlined'}
                        color={index === 1 ? 'secondary' : 'primary'}
                        sx={{ justifyContent: 'flex-start' }}
                      >
                        {item.label}
                      </AppButton>
                    ))}
                  </Stack>
                  {renderLocaleSwitch(locales as LocaleOption[], true)}
                </Stack>
              </Collapse>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
