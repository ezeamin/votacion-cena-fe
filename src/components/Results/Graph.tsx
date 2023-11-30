import { useMemo } from 'react';
import { Chart } from 'react-google-charts';

import { Box, Grid } from '@mui/material';

import { countFrequency } from '@/utilities/utilities';

import { GraphProps } from '../interface';

const defaultOptions = {
  backgroundColor: '#b8b8b8',
  fontSize: 16,
  legend: {
    position: 'bottom',
    maxLines: 5,
  },
};

const Graph = (props: GraphProps) => {
  const { data } = props;

  const kingResults = useMemo(() => countFrequency(data, 'king'), [data]);
  kingResults.unshift(['Candidato', 'Votos']);

  const queenResults = useMemo(() => countFrequency(data, 'queen'), [data]);
  queenResults.unshift(['Candidato', 'Votos']);

  console.log('hola');

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} sx={{ height: '100%' }}>
        <Box sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
          <Chart
            chartType="PieChart"
            data={kingResults}
            options={{
              title: 'Candidatos más votados - Reyes',
              ...defaultOptions,
            }}
            width="100%"
            height="500px"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
          <Chart
            chartType="PieChart"
            data={queenResults}
            options={{
              title: 'Candidatos más votados - Reinas',
              ...defaultOptions,
            }}
            width="100%"
            height="500px"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Graph;
