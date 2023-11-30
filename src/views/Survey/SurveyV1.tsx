import { Alert } from '@mui/material';

import people from '@/data/king.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV1 = () => (
  <>
    <Title title="Rey de la Cena 2023" hideDivider />
    <Alert severity="info" variant="outlined" sx={{ mt: 2 }}>
      Acá podes votar por un compañero
    </Alert>
    <OfficesList data={people} view={1} />
  </>
);

export default SurveyV1;
