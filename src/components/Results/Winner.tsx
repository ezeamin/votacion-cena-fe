import { Divider, Stack, Typography } from '@mui/material';

import { WinnerProps } from '../interface';

const Winner = (props: WinnerProps) => {
  const { winner, title } = props;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e);',
        borderRadius: '1rem',
        padding: '2.5rem 1rem',
        height: '150px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" component="h2">
        {title} 👑
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Typography variant="h5" component="h2" fontWeight="bold">
        {winner}
      </Typography>
    </Stack>
  );
};
export default Winner;
