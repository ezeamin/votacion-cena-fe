import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import people from '@/data/king.json';
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
      <Title title="Rey de la Cena 2023" hideDivider />
      <Alert severity="info" variant="outlined" sx={{ mt: 2 }}>
        Acá podes votar por un compañero
      </Alert>
      <OfficesList data={people} view={1} />
    </>
  );
};

export default SurveyV1;
