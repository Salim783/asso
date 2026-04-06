import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import type { Messages } from '@/translations/catalogs';
import {
  footerClasses,
  footerDescriptionStyles,
  footerDividerStyles,
  footerLinkStyles,
  footerMetaStyles,
  footerRootStyles,
  footerSocialLinkStyles,
  footerSurfaceStyles,
  footerTitleStyles,
} from './Footer.styles';

type FooterSection = Messages['footer']['sections'][number];
type FooterSocial = Messages['footer']['socials'][number];

type FooterProps = {
  common: Messages['common'];
  footer: Messages['footer'];
};

const socialIcons: Record<FooterSocial['label'], ReactElement> = {
  Facebook: <FaFacebook />,
  Twitter: <FaTwitter />,
  Instagram: <FaInstagram />,
};

export default function Footer({ common, footer }: FooterProps) {
  return (
    <Box component="footer" id="footer" className={footerClasses.root} sx={footerRootStyles}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100%',
          maxWidth: '100%',
          px: 0,
        }}
      >
        <Paper elevation={0} className={footerClasses.surface} sx={footerSurfaceStyles}>
          <Stack spacing={4} position="relative" zIndex={1}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            >
              <Stack spacing={1.5} maxWidth={420}>
                <Typography variant="h2" sx={footerTitleStyles}>
                  {common.associationName}
                </Typography>
                <Typography sx={footerDescriptionStyles}>
                  {footer.description}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.25} flexWrap="wrap">
                {footer.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    className={footerClasses.socialLink}
                    sx={footerSocialLinkStyles}
                  >
                    {socialIcons[social.label]}
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Divider sx={footerDividerStyles} />

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between">
              {footer.sections.map((section) => (
                <Stack key={section.title} spacing={1.25} minWidth={180}>
                  <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'inherit' }}>
                    {section.title}
                  </Typography>
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      component={NextLink}
                      href={item.href}
                      underline="hover"
                      sx={footerLinkStyles}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>

            <Divider sx={footerDividerStyles} />

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'center' }}
            >
              <Typography variant="body2" sx={footerMetaStyles}>
                {footer.copyright}
              </Typography>
              <Typography variant="body2" sx={footerMetaStyles}>
                {footer.contact}
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
