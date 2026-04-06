import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import AppCard from '../AppCard';
import {
  FeatureCardAccent,
  featureCardClasses,
  featureCardDescriptionStyles,
  featureCardTitleStyles,
  getFeatureCardRootStyles,
} from './FeatureCard.styles';

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  minHeight?: number;
  accent?: FeatureCardAccent;
};

export default function FeatureCard({
  icon,
  title,
  description,
  minHeight = 220,
  accent = 'primary',
}: FeatureCardProps) {
  return (
    <AppCard
      icon={icon}
      tone={accent}
      minHeight={minHeight}
      hoverable
      className={featureCardClasses.root}
      sx={getFeatureCardRootStyles(accent, minHeight)}
      contentSpacing={2.25}
      contentSx={{ p: 0, alignItems: 'flex-start' }}
    >
      <Stack spacing={1.25}>
        <Typography variant="h5" sx={featureCardTitleStyles}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={featureCardDescriptionStyles}>
          {description}
        </Typography>
      </Stack>
    </AppCard>
  );
}
