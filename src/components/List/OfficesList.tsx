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

import { useForm } from '@/store/useForm';
import { useSocket } from '@/store/useSocket';
import { toast } from 'sonner';

import { OfficesListProps } from '../interface';
import PersonItem from './PersonItem';

const OfficesList = (props: OfficesListProps) => {
  const { data, message, view } = props;

  // TODO: cambiar useForm por localStorage
  const { king, setKing } = useForm();

  const navigate = useNavigate();

  const { emitSocket, onSocket } = useSocket();

  const [selectedPerson, setSelectedPerson] = useState();
  console.log(
    '👌👌 ~ file: OfficesList.tsx:30 ~ OfficesList ~ selectedPerson:',
    selectedPerson
  );

  const elements = Object.keys(data).map((key) => {
    return data[key];
  });

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
      setKing(selectedPerson);
      navigate('/step-2');
    } else {
      console.log('😘😘😘😘😘')
      emitSocket('new vote', {
        king,
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

  //   TODO: Manejar error en un useEffect, usando onSocket fn del store. Evento "error"
  //   TODO: Dentro del mismo useEffect, esperar exito. Evento "success"

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
              <Divider>{Object.keys(data)[index].toUpperCase()}</Divider>
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
