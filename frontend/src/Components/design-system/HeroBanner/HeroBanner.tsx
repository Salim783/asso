'use client';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import AppButton from '../AppButton';
import AppCard from '../AppCard';
import AppContainer from '../AppContainer';
import {
  heroBannerAsideDescriptionStyles,
  heroBannerAsideStyles,
  heroBannerAsideTitleStyles,
  heroBannerChipStyles,
  heroBannerClasses,
  heroBannerDescriptionStyles,
  heroBannerGridStyles,
  heroBannerPanelStyles,
  heroBannerPrimaryActionStyles,
  heroBannerRootStyles,
  heroBannerSelectedActionStyles,
  heroBannerSecondaryActionStyles,
  heroBannerStatsCardStyles,
  heroBannerStatsLabelStyles,
  heroBannerStatsValueStyles,
  heroBannerTitleStyles,
} from './HeroBanner.styles';

type HeroAction = {
  href: string;
  label: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type HeroBannerProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  highlights?: string[];
  stats?: HeroStat[];
  asideTitle?: string;
  asideDescription?: string;
};

function HeroBannerActions({
  primaryAction,
  secondaryAction,
}: Pick<HeroBannerProps, 'primaryAction' | 'secondaryAction'>) {
  const pathname = usePathname();

  if (!primaryAction && !secondaryAction) {
    return null;
  }

  const isActionSelected = (href: string) => href.split('#')[0] === pathname;

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      {primaryAction ? (
        <AppButton
          href={primaryAction.href}
          variant="contained"
          size="large"
          aria-current={isActionSelected(primaryAction.href) ? 'page' : undefined}
          sx={[heroBannerPrimaryActionStyles, heroBannerSelectedActionStyles]}
        >
          {primaryAction.label}
        </AppButton>
      ) : null}
      {secondaryAction ? (
        <AppButton
          href={secondaryAction.href}
          variant="outlined"
          size="large"
          aria-current={isActionSelected(secondaryAction.href) ? 'page' : undefined}
          sx={[heroBannerSecondaryActionStyles, heroBannerSelectedActionStyles]}
        >
          {secondaryAction.label}
        </AppButton>
      ) : null}
    </Stack>
  );
}

function HeroBannerAside({
  asideTitle,
  asideDescription,
}: Pick<HeroBannerProps, 'asideTitle' | 'asideDescription'>) {
  if (!asideTitle && !asideDescription) {
    return null;
  }

  return (
    <AppCard
      title={asideTitle}
      description={asideDescription}
      titleVariant="h4"
      sx={heroBannerAsideStyles}
      contentSx={{ p: 3 }}
      titleSx={heroBannerAsideTitleStyles}
      descriptionSx={heroBannerAsideDescriptionStyles}
    />
  );
}

function HeroBannerStats({ stats }: Pick<HeroBannerProps, 'stats'>) {
  if (!stats?.length) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {stats.map((item) => (
        <Grid key={item.label} size={{ xs: 12, sm: 4, md: 12 }}>
          <AppCard
            className={heroBannerClasses.statsCard}
            sx={heroBannerStatsCardStyles}
            contentSx={{ p: 2.5 }}
            contentSpacing={0.75}
            title={item.value}
            description={item.label}
            titleVariant="h3"
            titleSx={heroBannerStatsValueStyles}
            descriptionSx={heroBannerStatsLabelStyles}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default function HeroBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights = [],
  stats = [],
  asideTitle,
  asideDescription,
}: HeroBannerProps) {
  return (
    <AppContainer className={heroBannerClasses.root} sx={heroBannerRootStyles}>
      <AppCard className={heroBannerClasses.panel} sx={heroBannerPanelStyles} contentSx={{ p: 0 }}>
        <Grid container spacing={{ xs: 4, md: 5 }} sx={heroBannerGridStyles}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5}>
              {eyebrow ? (
                <Typography variant="overline" sx={{ color: 'rgba(248,243,234,0.8)' }}>
                  {eyebrow}
                </Typography>
              ) : null}
              <Typography variant="h1" sx={heroBannerTitleStyles}>
                {title}
              </Typography>
              <Typography sx={heroBannerDescriptionStyles}>{description}</Typography>
              {highlights.length ? (
                <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
                  {highlights.map((item) => (
                    <Chip key={item} label={item} sx={heroBannerChipStyles} />
                  ))}
                </Stack>
              ) : null}
              <HeroBannerActions primaryAction={primaryAction} secondaryAction={secondaryAction} />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.25} sx={{ height: '100%' }}>
              <HeroBannerAside asideTitle={asideTitle} asideDescription={asideDescription} />
              <HeroBannerStats stats={stats} />
            </Stack>
          </Grid>
        </Grid>
      </AppCard>
    </AppContainer>
  );
}
