import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Loading() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '90vw',
        maxWidth: '90vw',
        mx: 'auto',
        py: { xs: 10, md: 14 },
      }}
    >
      <Stack
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <Box
          sx={{
            width: 68,
            height: 68,
            borderRadius: '18px',
            display: 'grid',
            placeItems: 'center',
            background: 'linear-gradient(180deg, rgba(217,236,232,0.8), rgba(255,253,248,1))',
            border: '1px solid rgba(20,92,82,0.12)',
          }}
        >
          <CircularProgress size={28} thickness={4.5} color="primary" />
        </Box>
        <Typography variant="body1" color="text.secondary">
          Chargement...
        </Typography>
      </Stack>
    </Container>
  );
}
