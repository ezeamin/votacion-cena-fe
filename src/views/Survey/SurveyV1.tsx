import people from '@/data/men.json';

import OfficesList from '@/components/List/OfficesList';
import Title from '@/components/Title';

const SurveyV1 = () => (
  <>
    <Title title="Elige un rey" />
    <OfficesList view={1} data={people} />
  </>
);

export default SurveyV1;
