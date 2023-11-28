import { Box, Link, Typography } from '@mui/material';

const PreviewResults = () => {
  return (
    <Box sx={{ mt: '100%' }}>
      <Typography align="center" component="h2" variant="h4">
        Su voto fue registrado correctamente !
      </Typography>
      <Typography align="center" component="h2" mt={3} variant="h6">
        <Link href="/results">VER LOS RESULTADOS</Link>
      </Typography>
    </Box>
  );
};

export default PreviewResults;
