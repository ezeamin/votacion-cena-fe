import { Link } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/material';

const PreviewResults = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="space-evenly"
      sx={{ height: '100vh' }}
    >
      <Typography component="h2" sx={{ mx: 6 }} textAlign="center" variant="h4">
        Su voto fue registrado correctamente !
      </Typography>

      <Button
        color="violet"
        component={Link}
        size="large"
        sx={{ color: '#fff', textDecoration: 'none' }}
        to="/results"
        variant="contained"
      >
        VER LOS RESULTADOS
      </Button>
    </Stack>
  );
};

export default PreviewResults;
