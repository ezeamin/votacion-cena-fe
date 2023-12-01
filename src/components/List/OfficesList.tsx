import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Divider, FormControl, RadioGroup } from '@mui/material';

import { useLoading } from '@/store/useLoading';
import { useSocket } from '@/store/useSocket';
import { toast } from 'sonner';

import { OfficesListProps } from '../interface';
import PersonItem from './PersonItem';

const OfficesList = (props: OfficesListProps) => {
  const { data, view } = props;

  const navigate = useNavigate();

  const { emitSocket, onSocket } = useSocket();
  const { setIsLoading } = useLoading();

  const [selectedPerson, setSelectedPerson] = useState();

  const elements = Object.keys(data).map((key) => {
    return data[key];
  });

  const handleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    setSelectedPerson(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedPerson) {
      toast.error('Error: debe seleccionar un compañero/a antes de continuar.');
      return;
    }

    if (view === 1) {
      localStorage.setItem('king', selectedPerson);
      navigate('/step-2');
    } else {
      if (!localStorage.getItem('king')) {
        toast.error('Error: debe seleccionar un rey antes de continuar.');
        navigate('/step-1');
        return;
      }

      setIsLoading(true);

      // In case it doesn't -> Can happen
      setTimeout(() => {
        setIsLoading(false);
        localStorage.removeItem('king');
        if (window.location.pathname === '/step-2') navigate('/finish-survey');
      }, 3000);

      emitSocket('new vote', {
        king: localStorage.getItem('king'),
        queen: selectedPerson,
      });
    }
  };

  useEffect(() => {
    onSocket('error', (msg) => {
      setIsLoading(false);
      if (typeof msg === 'string') {
        if (msg.includes('votaste')) {
          localStorage.removeItem('king');
          navigate('/duplicated');
        } else toast.error(msg);
      } else if (msg instanceof Error) toast.error(msg.message);
    });
    onSocket('success', () => {
      setIsLoading(false);
      localStorage.removeItem('king');
      navigate('/finish-survey');
    });
  }, [onSocket]);

  return (
    <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
      <FormControl sx={{ width: '100%', my: 2, mb: 5 }}>
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

      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: '0',
          py: '1rem',
          backgroundColor: '#33333C',
        }}
      >
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={!selectedPerson}
        >
          {view === 1 ? 'Siguiente paso' : 'Finalizar votación'}
        </Button>
      </Box>
    </form>
  );
};
export default OfficesList;
