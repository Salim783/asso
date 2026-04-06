import { SxProps, Theme } from '@mui/material/styles';

export type AppSectionAlign = 'left' | 'center';

export const appSectionClasses = {
  root: 'AppSection-root',
  content: 'AppSection-content',
  header: 'AppSection-header',
  rule: 'AppSection-rule',
  title: 'AppSection-title',
  description: 'AppSection-description',
} as const;

export const appSectionStyles: Record<typeof appSectionClasses.root | typeof appSectionClasses.content, SxProps<Theme>> = {
  [appSectionClasses.root]: {
    py: { xs: 6, md: 9 },
  },
  [appSectionClasses.content]: {},
};

export const getAppSectionHeaderStyles = (align: AppSectionAlign): SxProps<Theme> => ({
  spacing: 2,
  maxWidth: align === 'center' ? 760 : 820,
  textAlign: align,
});

export const getAppSectionRuleStyles = (align: AppSectionAlign): SxProps<Theme> => ({
  width: align === 'center' ? 72 : 56,
  height: 1,
  mx: align === 'center' ? 'auto' : 0,
  background: 'linear-gradient(90deg, rgba(194,123,71,0.2), rgba(20,92,82,0.8))',
});

export const appSectionTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2.5rem', md: '4rem' },
  maxWidth: 900,
};

export const appSectionDescriptionStyles: SxProps<Theme> = {
  fontSize: { xs: '1rem', md: '1.12rem' },
  lineHeight: 1.8,
  maxWidth: 780,
};
