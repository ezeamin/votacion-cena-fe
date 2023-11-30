import { useEffect, useState } from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import { useSocket } from '@/store/useSocket';
import { toast } from 'sonner';

import Graph from '@/components/Results/Graph';
import NumberOfVotes from '@/components/Results/NumberOfVotes';
import Winners from '@/components/Results/Winners';
import Title from '@/components/Title';

import { Vote } from '@/components/interface';

const ResultsV1 = () => {
  const { onSocket } = useSocket();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Vote[]>([]);

  useEffect(() => {
    onSocket('votes', (apiData) => {
      setData(apiData as Vote[]);

      setIsLoading(false);
    });
    onSocket('error', (msg) => {
      if (typeof msg === 'string') toast.error(msg);
      else if (msg instanceof Error) toast.error(msg.message);

      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <Title title="Resultados - Cena 2023" />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: 'calc(100vh - 100px)' }}
        >
          <Typography align="center" sx={{ py: 3 }}>
            Cargando...
          </Typography>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Title title="Resultados - Cena 2023" />
      <Grid container sx={{ mt: 3 }} spacing={1}>
        <Grid item xs={12} md={6}>
          <NumberOfVotes data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Winners data={data} />
        </Grid>
        <Grid item xs={12}>
          <Graph data={data} />
        </Grid>
      </Grid>
    </>
  );
};
export default ResultsV1;
