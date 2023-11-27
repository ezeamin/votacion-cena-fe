import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';

import PreviewResults from './PreviewResults/PreviewResults';
import ResultsV1 from './Results/ResultsV1';
import SurveyV1 from './Survey/SurveyV1';
import SurveyV2 from './Survey/SurveyV2';

const Router = () => {
  return (
    <BrowserRouter>
      <Container className="content" sx={{ py: 2 }}>
        <main>
          <Routes>
            <Route path="/" element={<SurveyV1 />} />
            <Route path="/step-2" element={<SurveyV2 />} />
            <Route path="/preview-results" element={<PreviewResults />} />
            <Route path="/results" element={<ResultsV1 />} />
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
