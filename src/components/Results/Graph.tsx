import { useMemo } from 'react';
import { Chart } from 'react-google-charts';

import { Box } from '@mui/material';

import { countFrequency } from '@/utilities/utilities';

import { GraphProps } from '../interface';

const defaultOptions = {
  backgroundColor: '#b8b8b8',
  fontSize: 16,
  legend: {
    position: 'right',
    maxLines: 5,
  },
};

const Graph = (props: GraphProps) => {
  const { data } = props;

  const results = useMemo(() => countFrequency(data), [data]);
  results.unshift(['Candidato', 'Votos']);

  return (
    <Box sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
      <Chart
        chartType="PieChart"
        data={results}
        options={{
          title: 'Candidatos más votados',
          ...defaultOptions,
        }}
        width="100%"
        height="500px"
      />
    </Box>
  );
};

export default Graph;
