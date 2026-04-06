import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ContainerProps } from '@mui/material/Container';
import { ReactNode } from 'react';
import AppContainer from '../AppContainer';
import {
  AppSectionAlign,
  appSectionClasses,
  appSectionDescriptionStyles,
  appSectionStyles,
  appSectionTitleStyles,
  getAppSectionHeaderStyles,
  getAppSectionRuleStyles,
} from './AppSection.styles';

type AppSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
  spacing?: number;
  align?: AppSectionAlign;
};

export default function AppSection({
  id,
  eyebrow,
  title,
  description,
  children,
  maxWidth = false,
  spacing = 4,
  align = 'left',
}: AppSectionProps) {
  return (
    <AppContainer
      id={id}
      maxWidth={maxWidth}
      className={appSectionClasses.root}
      sx={appSectionStyles[appSectionClasses.root]}
    >
      <Stack
        spacing={spacing}
        className={appSectionClasses.content}
        sx={appSectionStyles[appSectionClasses.content]}
      >
        {(eyebrow || title || description) && (
          <Stack className={appSectionClasses.header} sx={getAppSectionHeaderStyles(align)}>
            <Stack className={appSectionClasses.rule} sx={getAppSectionRuleStyles(align)} />
            {eyebrow ? (
              <Typography variant="overline" color="primary.main">
                {eyebrow}
              </Typography>
            ) : null}
            {title ? (
              <Typography variant="h2" className={appSectionClasses.title} sx={appSectionTitleStyles}>
                {title}
              </Typography>
            ) : null}
            {description ? (
              <Typography
                variant="body1"
                color="text.secondary"
                className={appSectionClasses.description}
                sx={appSectionDescriptionStyles}
              >
                {description}
              </Typography>
            ) : null}
          </Stack>
        )}
        {children}
      </Stack>
    </AppContainer>
  );
}
