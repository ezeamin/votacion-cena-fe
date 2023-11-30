import { Divider, Typography } from '@mui/material';

import { TitleProps } from './interface';

const Title = (props: TitleProps) => {
  const { title, centered, hideDivider = false } = props;

  return (
    <>
      <Typography
        sx={{ my: 1 }}
        variant="h4"
        component="h1"
        textAlign={centered ? 'center' : 'start'}
      >
        {title}
      </Typography>
      {!hideDivider && <Divider />}
    </>
  );
};
export default Title;
