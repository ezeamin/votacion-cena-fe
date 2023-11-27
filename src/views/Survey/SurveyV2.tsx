import people from '@/data/women.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV2 = () => {
  return (
    <>
      <Title title="Elige una reina" />
      <OfficesList view={2} data={people} />
    </>
  );
};
export default SurveyV2;
