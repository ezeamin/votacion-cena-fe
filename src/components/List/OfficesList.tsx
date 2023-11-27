import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Divider, FormControl, RadioGroup } from '@mui/material';

import { useForm } from '@/store/useForm';
import { useSocket } from '@/store/useSocket';

import { OfficesListProps } from '../interface';
import PersonItem from './PersonItem';

const OfficesList = (props: OfficesListProps) => {
  const { data, view } = props;

  const { emitSocket } = useSocket();
  const { king, setKing } = useForm();

  const navigate = useNavigate();

  const elements = Object.keys(data).map((key) => {
    return data[key];
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-expect-error -- TODO: fix this
    const selectedPerson = e.currentTarget.elements.position.value;

    if (view === 1) {
      setKing(selectedPerson);
      navigate('/step-2');
    } else {
      emitSocket('new vote', {
        king,
        queen: selectedPerson,
      });
    }
  };

  //   TODO: Manejar error en un useEffect, usando onSocket fn del store. Evento "error"
  //   TODO: Dentro del mismo useEffect, esperar exito. Evento "success"

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ width: '100%', my: 2 }}>
        <RadioGroup
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
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
      <button type="submit">send</button>
    </form>
  );
};
export default OfficesList;
