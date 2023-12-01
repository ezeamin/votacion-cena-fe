import { useEffect, useState } from 'react';

import { Button, Stack, Typography } from '@mui/material';

import { useLoading } from '@/store/useLoading';
import { useSocket } from '@/store/useSocket';
import { toast } from 'sonner';

import Timer from '@/components/Results/Timer';

const ClockV1 = () => {
  const { emitSocket, onSocket } = useSocket();
  const { setIsLoading } = useLoading();

  const [timer, setTimer] = useState(0);
  const [hasStartedClock, setHasStartedClock] = useState(false);
  const [clockRunning, setClockRunning] = useState(false);

  useEffect(() => {
    onSocket('timer', (data) => {
      setIsLoading(false);
      setClockRunning(true);

      if (hasStartedClock) {
        toast.success('El reloj se ha iniciado');
      }

      if (typeof data === 'number') {
        setTimer(data);
      }
    });
    onSocket('error', (error) => {
      setIsLoading(false);

      if (error instanceof Error) toast.error(error.message);
      else if (typeof error === 'string') toast.error(error);
    });
    onSocket('no timer', () => {
      setHasStartedClock(false);
      setClockRunning(false);
      setIsLoading(false);
      setTimer(0);
    });
  }, []);

  const handleClick = () => {
    if (timer === 0) {
      setIsLoading(true);
      setHasStartedClock(true);
      emitSocket('start timer', {});
    }
  };

  const handleTerminate = () => {
    setIsLoading(true);
    emitSocket('stop timer', {});
  };

  return (
    <Stack
      flexDirection="column"
      justifyContent="space-evenly"
      sx={{ height: '100vh' }}
    >
      <div>
        <Typography
          component="h2"
          sx={{ mx: 2 }}
          textAlign="center"
          variant="h4"
        >
          Iniciar reloj
        </Typography>
        <Timer textAlign="center" />
      </div>

      <Stack gap={2}>
        <Button
          size="large"
          sx={{ color: '#fff', textDecoration: 'none' }}
          variant="contained"
          onClick={handleClick}
          disabled={timer !== 0}
        >
          Iniciar
        </Button>
        <Button
          color="error"
          size="large"
          sx={{ color: '#fff', textDecoration: 'none' }}
          variant="contained"
          onClick={handleTerminate}
          disabled={!clockRunning}
        >
          Terminar
        </Button>
      </Stack>
    </Stack>
  );
};
export default ClockV1;
