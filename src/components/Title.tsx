import { Divider, Stack, Typography } from '@mui/material';

import { TitleProps } from './interface';
import Timer from './Results/Timer';

const Title = (props: TitleProps) => {
  const { title, centered, hideDivider = false } = props;

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{ my: 1 }}
          variant="h4"
          component="h1"
          textAlign={centered ? 'center' : 'start'}
        >
          {title}
        </Typography>
        <Timer />
      </Stack>
      {!hideDivider && <Divider />}
    </>
  );
};
export default Title;
