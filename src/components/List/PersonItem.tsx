import { FormControlLabel, Radio, Stack } from '@mui/material';

import { PersonItemProps } from '../interface';

const PersonItem = (props: PersonItemProps) => {
  const { person } = props;

  return (
    <Stack component="li">
      <FormControlLabel
        value={person}
        control={
          <Radio
            sx={{
              color: 'gray.main',
              '&.Mui-checked': {
                color: 'red.main',
              },
            }}
          />
        }
        label={person}
        labelPlacement="start"
        sx={{ justifyContent: 'space-between', ml: 0 }}
      />
    </Stack>
  );
};
export default PersonItem;
