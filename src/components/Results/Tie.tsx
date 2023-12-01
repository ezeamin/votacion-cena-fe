import { useMemo } from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

import { useSocket } from '@/store/useSocket';
import { findMostFrequentValues } from '@/utilities/utilities';
import Swal from 'sweetalert2';

import { TieProps } from '../interface';

const Tie = (props: TieProps) => {
  const { list, type } = props;

  const { emitSocket } = useSocket();

  const mostVoted = useMemo(() => findMostFrequentValues(list), [list]);

  const handleClick = async () => {
    const result = await Swal.fire({
      title: 'Atención',
      text: '¿Estás seguro? Solo podrás sortear 1 vez',
      cancelButtonText: 'No, cancelar',
      confirmButtonText: 'Si, sortear',
      showCancelButton: true,
    });
    if (result.isConfirmed) {
      const randomWinner =
        mostVoted[Math.floor(Math.random() * mostVoted.length)];

      emitSocket('new random winner', { type, person: randomWinner });
      alert(randomWinner);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        color: '#000000',
        borderRadius: '1rem',
        padding: '1rem 1rem',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" component="h2" fontWeight="bold">
          Hubo un empate de {type === 'king' ? 'REYES' : 'REINAS'}!
        </Typography>
        <Button variant="contained" type="button" onClick={handleClick}>
          Sortear 🎲
        </Button>
      </Stack>
      <Stack>
        <Typography variant="h6" component="h2">
          {mostVoted.join(' - ')}
        </Typography>
      </Stack>
    </Box>
  );
};
export default Tie;
