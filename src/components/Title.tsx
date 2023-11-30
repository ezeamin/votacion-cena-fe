import { Divider, Typography } from '@mui/material';

import { TitleProps } from './interface';

const Title = (props: TitleProps) => {
  const { title, centered } = props;

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
      <Divider />
    </>
  );
};
export default Title;
