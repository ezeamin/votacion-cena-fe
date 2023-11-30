// import people from '@/data/women.json';
import { useEffect } from 'react';

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
      <OfficesList
        data={people}
        message="Acá podes votar una compañera"
        view={2}
      />
    </>
  );
};
export default SurveyV2;
