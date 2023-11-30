import { useMemo } from 'react';

import { Stack, Typography } from '@mui/material';

import { findMostFrequentValue } from '@/utilities/utilities';

import { WinnersProps } from '../interface';

const Winners = (props: WinnersProps) => {
  const { data } = props;

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

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: '#7F947D',
        borderRadius: '1rem',
        padding: '2.5rem 1rem',
        position: 'relative',
        height: '150px',
        maxHeight: '150px',
      }}
    >
      <Stack>
        <Typography variant="h5" component="h2" display="inline">
          Rey actual 👑
        </Typography>
        <Typography variant="h5" component="h2" display="inline">
          Reina actual 👑
        </Typography>
      </Stack>
      <Stack sx={{ textAlign: 'end' }}>
        <Typography variant="h5" component="h2" display="inline">
          {mostVotedKing}
        </Typography>
        <Typography variant="h5" component="h2" display="inline">
          {mostVotedQueen}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default Winners;
