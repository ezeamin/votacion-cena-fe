import { useEffect } from 'react';

import { Alert } from '@mui/material';

import people from '@/data/queen.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
