import { useMemo } from 'react';

import { Stack, Typography } from '@mui/material';

import { findMostFrequentValue } from '@/utilities/utilities';

import usePortrait from '@/hooks/usePortrait';

import { WinnersProps } from '../interface';

const Winners = (props: WinnersProps) => {
  const { data } = props;

  const isPortrait = usePortrait('md');

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

  if (isPortrait) {
    return (
      <Stack gap={1}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: '#7F947D',
            borderRadius: '1rem',
            padding: '2.5rem 1rem',
            height: '150px',
            maxHeight: '150px',
          }}
        >
          <Typography
            align="center"
            variant="h5"
            component="h2"
            display="inline"
          >
            Rey actual 👑
          </Typography>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            display="inline"
          >
            {mostVotedKing}
          </Typography>
        </Stack>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: '#7F947D',
            borderRadius: '1rem',
            padding: '2.5rem 1rem',
            height: '150px',
            maxHeight: '150px',
          }}
        >
          <Typography
            align="center"
            variant="h5"
            component="h2"
            display="inline"
          >
            Reina actual 👑
          </Typography>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            display="inline"
          >
            {mostVotedQueen}
          </Typography>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: '#7F947D',
        borderRadius: '1rem',
        padding: '2.5rem 1rem',
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
