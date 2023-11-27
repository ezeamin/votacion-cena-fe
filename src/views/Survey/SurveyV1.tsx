import people from '@/data/men.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV1 = () => (
  <>
    <Title title="Elige un rey" />
    <OfficesList
      data={people}
      message="Acá poder votar por un compañero"
      view={1}
    />
  </>
);

export default SurveyV1;
