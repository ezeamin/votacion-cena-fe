import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import people from '@/data/people.json';
import { useSocket } from '@/store/useSocket';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV1 = () => {
  const { onSocket } = useSocket();

  const navigate = useNavigate();

  useEffect(() => {
    onSocket('timer finished', () => {
      localStorage.removeItem('king');
      navigate('/timeout');
    });
  }, []);

  return (
    <>
      <Title title="Señor Picasso" hideDivider />
      <Alert severity="info" variant="outlined" sx={{ mt: 2 }}>
        Acá podes votar por un compañero
      </Alert>
      <OfficesList data={people} view={2} />
    </>
  );
};

export default SurveyV1;
