import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

const PreviewResults = () => {
  return (
    <Box sx={{ mt: '100%' }}>
      <Typography align="center" component="h2" variant="h4">
        Su voto fue registrado correctamente !
      </Typography>
      <Box textAlign="center">
        <Button
          color="violet"
          size="large"
          sx={{ mt: '25%' }}
          variant="contained"
        >
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/results">
            VER LOS RESULTADOS
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default PreviewResults;
