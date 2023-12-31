import { Button, Stack, Typography } from '@mui/material';

const FinishSurvey = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="space-evenly"
      sx={{ height: '100vh' }}
    >
      <Typography component="h2" sx={{ mx: 2 }} textAlign="center" variant="h4">
        Su voto fue registrado correctamente !
      </Typography>

      <Button
        component="a"
        size="large"
        sx={{ color: '#fff', textDecoration: 'none' }}
        href="/results"
        variant="contained"
      >
        VER LOS RESULTADOS
      </Button>
    </Stack>
  );
};

export default FinishSurvey;
