import { useEffect, useMemo, useState } from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import { useSocket } from '@/store/useSocket';
import { findMostFrequentValue } from '@/utilities/utilities';
import { toast } from 'sonner';

import Graph from '@/components/Results/Graph';
import NumberOfVotes from '@/components/Results/NumberOfVotes';
import Tie from '@/components/Results/Tie';
import Winner from '@/components/Results/Winner';
import Title from '@/components/Title';

import { Vote } from '@/components/interface';

const ResultsV1 = () => {
  const { onSocket } = useSocket();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Vote[]>([]);
  const [canHandleTie, setCanHandleTie] = useState(false);

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
    onSocket('timer', () => setCanHandleTie(false));
    onSocket('no timer', () => setCanHandleTie(true));
  }, [onSocket]);

  const kingsList: string[] = useMemo(
    () => data.reduce<string[]>((prev, person) => [...prev, person.king], []),
    [data]
  );
  const queensList: string[] = useMemo(
    () => data.reduce<string[]>((prev, person) => [...prev, person.queen], []),
    [data]
  );

  const mostVotedKing = useMemo(
    () => findMostFrequentValue(kingsList),
    [kingsList]
  );
  const mostVotedQueen = useMemo(
    () => findMostFrequentValue(queensList),
    [queensList]
  );

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
        <Grid item xs={12}>
          <NumberOfVotes data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Winner title="Rey actual" winner={mostVotedKing} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Winner title="Reina actual" winner={mostVotedQueen} />
        </Grid>
        <Grid item xs={12}>
          <Graph data={data} />
        </Grid>
        {mostVotedKing === 'EMPATE' && (
          <Grid item xs={12}>
            <Tie list={kingsList} type="king" canHandleTie={canHandleTie} />
          </Grid>
        )}
        {mostVotedQueen === 'EMPATE' && (
          <Grid item xs={12}>
            <Tie list={queensList} type="queen" canHandleTie={canHandleTie} />
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default ResultsV1;
