import { Box, Button, Stack, Typography } from '@mui/material';

const Timeout = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="space-evenly"
      sx={{ height: '100vh' }}
    >
      <Box sx={{ mx: 1 }}>
        <Typography
          component="h2"
          textAlign="center"
          variant="h4"
          sx={{ mb: 2 }}
        >
          ¡Tiempo terminado! 😳⏱️
        </Typography>
        <Typography component="p" variant="body1" textAlign="center">
          Te invitamos a revisar los resultados
        </Typography>
      </Box>

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
export default Timeout;
