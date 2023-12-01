import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';

import ClockV1 from './Clock/ClockV1';
import ResultsV1 from './Results/ResultsV1';
import Duplicated from './Survey/Duplicated';
import FinishSurvey from './Survey/FinishSurvey';
import SurveyV1 from './Survey/SurveyV1';
import SurveyV2 from './Survey/SurveyV2';
import Timeout from './Survey/Timeout';

const Router = () => {
  return (
    <BrowserRouter>
      <Container sx={{ py: 2 }}>
        <main>
          <Routes>
            <Route path="/" element={<SurveyV1 />} />
            <Route path="/step-2" element={<SurveyV2 />} />
            <Route path="/finish-survey" element={<FinishSurvey />} />
            <Route path="/duplicated" element={<Duplicated />} />
            <Route path="/results" element={<ResultsV1 />} />
            <Route path="/clock" element={<ClockV1 />} />
            <Route path="/timeout" element={<Timeout />} />
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
