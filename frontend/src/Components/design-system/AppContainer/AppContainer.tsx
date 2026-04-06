import Container, { ContainerProps } from '@mui/material/Container';

type AppContainerProps = ContainerProps;

export default function AppContainer({ sx, disableGutters = true, maxWidth = false, ...props }: AppContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={[
        {
          width: '90vw',
          maxWidth: '90vw',
          mx: 'auto',
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    />
  );
}
