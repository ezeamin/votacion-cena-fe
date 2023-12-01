import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';

import { useSocket } from '@/store/useSocket';
import { toast } from 'sonner';

import { TimerProps } from '../interface';

const Timer = (props: TimerProps) => {
  const { textAlign } = props;

  const { onSocket } = useSocket();

  const [timer, setTimer] = useState('');

  useEffect(() => {
    // Update the timer locally every second
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === '') return '';

        const [minutes, seconds] = prevTimer.split(':');
        let totalSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
        totalSeconds -= 1;

        if (totalSeconds < 0) {
          clearInterval(intervalId);
          return '';
        }

        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds - newMinutes * 60;

        return `${String(newMinutes).padStart(2, '0')}:${String(
          newSeconds
        ).padStart(2, '0')}`;
      });
    }, 1000);

    // Listen for timer updates from the backend via WebSocket
    onSocket('timer', (apiData) => {
      if (typeof apiData === 'number') {
        const minutes = Math.floor(apiData / 60);
        const seconds = apiData - minutes * 60;

        setTimer(
          `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0'
          )}`
        );
      }
    });

    onSocket('timer finished', () => {
      toast.info('El contador ha finalizado!');
      setTimer('');
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [onSocket, setTimer]);

  return (
    <Typography variant="body1" component="p" textAlign={textAlign}>
      {timer}
    </Typography>
  );
};

export default Timer;
