import people from '@/data/women.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV2 = () => {
  return (
    <>
      <Title title="Elige una reina" />
      <OfficesList
        data={people}
        message="Acá podes votar una compañera"
        view={2}
      />
    </>
  );
};
export default SurveyV2;
