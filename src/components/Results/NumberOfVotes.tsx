import { Stack, Typography } from '@mui/material';

import men from '@/data/king.json';
import women from '@/data/queen.json';

import { NumberOfVotesProps } from '../interface';

const NumberOfVotes = (props: NumberOfVotesProps) => {
  const { data } = props;

  const amountOfPeople = men.candidatos.length + women.candidatas.length;

  const votedCount = data.filter((item) => item.shouldCount).length;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%);',
        borderRadius: '1rem',
        padding: '2.5rem 1rem',
        height: '125px',
        maxHeight: '125px',
      }}
    >
      <Typography variant="h5" component="h2" display="inline">
        Votos emitidos
      </Typography>
      <div>
        <Typography variant="h3" component="h2" display="inline">
          {votedCount}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          display="inline"
          color="dark.main"
        >
          /{amountOfPeople}
        </Typography>
      </div>
    </Stack>
  );
};
export default NumberOfVotes;
