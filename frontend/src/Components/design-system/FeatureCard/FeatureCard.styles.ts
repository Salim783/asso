import { SxProps, Theme } from '@mui/material/styles';

export type FeatureCardAccent = 'primary' | 'secondary';

export const featureCardClasses = {
  root: 'FeatureCard-root',
} as const;

export const getFeatureCardRootStyles = (accent: FeatureCardAccent, minHeight: number): SxProps<Theme> => ({
  minHeight,
  p: 3.25,
  height: '100%',
});

export const featureCardTitleStyles: SxProps<Theme> = {
  fontSize: '1.28rem',
};

export const featureCardDescriptionStyles: SxProps<Theme> = {
  lineHeight: 1.8,
};
