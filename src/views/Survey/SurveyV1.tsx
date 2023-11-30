// import people from '@/data/men.json';
import people from '@/data/king.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV1 = () => (
  <>
    <Title title="Rey de la Cena 2023" />
    <OfficesList
      data={people}
      message="Acá podes votar por un compañero"
      view={1}
    />
  </>
);

export default SurveyV1;
