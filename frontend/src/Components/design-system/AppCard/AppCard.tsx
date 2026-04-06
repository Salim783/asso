import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactNode } from 'react';
import {
  AppCardAlign,
  AppCardTone,
  appCardClasses,
  appCardDescriptionStyles,
  appCardTitleStyles,
  getAppCardContentStyles,
  getAppCardIconStyles,
  getAppCardRootStyles,
} from './AppCard.styles';

type AppCardProps = {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  media?: ReactNode;
  children?: ReactNode;
  minHeight?: number | string;
  tone?: AppCardTone;
  align?: AppCardAlign;
  hoverable?: boolean;
  className?: string;
  contentSpacing?: number;
  titleVariant?: TypographyProps['variant'];
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
  descriptionSx?: SxProps<Theme>;
};

export default function AppCard({
  title,
  description,
  icon,
  media,
  children,
  minHeight,
  tone = 'neutral',
  align = 'left',
  hoverable = false,
  className,
  contentSpacing = 1.25,
  titleVariant = 'h5',
  sx,
  contentSx,
  titleSx,
  descriptionSx,
}: AppCardProps) {
  return (
    <Paper
      elevation={0}
      className={className ?? appCardClasses.root}
      sx={[getAppCardRootStyles(tone, minHeight, hoverable), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      {media}
      <Stack
        spacing={contentSpacing}
        className={appCardClasses.content}
        sx={[getAppCardContentStyles(align), ...(Array.isArray(contentSx) ? contentSx : contentSx ? [contentSx] : [])]}
      >
        {icon ? (
          <Stack className={appCardClasses.icon} sx={getAppCardIconStyles(tone)}>
            {icon}
          </Stack>
        ) : null}
        {title ? (
          <Typography variant={titleVariant} sx={[appCardTitleStyles, ...(Array.isArray(titleSx) ? titleSx : titleSx ? [titleSx] : [])]}>
            {title}
          </Typography>
        ) : null}
        {description ? (
          <Typography
            color="text.secondary"
            sx={[appCardDescriptionStyles, ...(Array.isArray(descriptionSx) ? descriptionSx : descriptionSx ? [descriptionSx] : [])]}
          >
            {description}
          </Typography>
        ) : null}
        {children}
      </Stack>
    </Paper>
  );
}
