import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  RadioGroup,
} from '@mui/material';

import { useSocket } from '@/store/useSocket';
import { toast } from 'sonner';

import { OfficesListProps } from '../interface';
import PersonItem from './PersonItem';

const OfficesList = (props: OfficesListProps) => {
  const { data, message, view } = props;

  const navigate = useNavigate();

  const { emitSocket, onSocket } = useSocket();

  const [selectedPerson, setSelectedPerson] = useState();

  const elements = Object.keys(data).map((key) => {
    return data[key];
  });

  // const orderedElements = elements[0].sort((a, b) => {
  //   const firstNameA = a.split(' ')[0].toUpperCase();
  //   const firstNameB = b.split(' ')[0].toUpperCase();

  //   if (firstNameA < firstNameB) {
  //     return -1;
  //   }
  //   if (firstNameA > firstNameB) {
  //     return 1;
  //   }
  //   return 0;
  // });

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    setSelectedPerson(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedPerson) {
      toast.error('Error: debe seleccionar un compañoro/a antes de continuar.');
      return;
    }

    if (view === 1) {
      localStorage.setItem('king', selectedPerson);
      navigate('/step-2');
    } else {
      emitSocket('new vote', {
        king: localStorage.getItem('king'),
        queen: selectedPerson,
      });
    }
  };

  useEffect(() => {
    onSocket('error', (msg) => {
      toast.error(msg);
    });
    onSocket('success', () => {
      navigate('/preview-results');
    });
  }, [onSocket]);

  return (
    <form onSubmit={handleSubmit}>
      <Alert severity="info" variant="outlined">
        {message}
      </Alert>
      <FormControl sx={{ width: '100%', my: 2 }}>
        <RadioGroup
          aria-labelledby="demo-form-control-label-placement"
          defaultValue="top"
          name="position"
          onChange={handleChange}
        >
          {elements.map((element, index) => (
            <Fragment key={Object.keys(data)[index]}>
              <Divider>
                {Object.keys(data)[index].toUpperCase() || null}
              </Divider>
              <Box component="ul" sx={{ mb: 3 }}>
                {element.map((person) => (
                  <PersonItem person={person} key={person} />
                ))}
              </Box>
            </Fragment>
          ))}
        </RadioGroup>
      </FormControl>

      <Button fullWidth type="submit" variant="contained">
        {view === 1 ? 'Siguiente paso' : 'Finalizar votación'}
      </Button>
    </form>
  );
};
export default OfficesList;
