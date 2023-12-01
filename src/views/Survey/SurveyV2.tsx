import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import people from '@/data/queen.json';
import { useSocket } from '@/store/useSocket';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV2 = () => {
  const { onSocket } = useSocket();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    onSocket('timer finished', () => {
      localStorage.removeItem('king');
      navigate('/timeout');
    });
  }, []);

  return (
    <>
      <Title title="Reina de la Cena 2023" hideDivider />
      <Alert severity="info" variant="outlined" sx={{ mt: 2 }}>
        Acá podes votar una compañera
      </Alert>
      <OfficesList data={people} view={2} />
    </>
  );
};
export default SurveyV2;
