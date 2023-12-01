import { CssBaseline, ThemeProvider } from '@mui/material';

import { Toaster } from 'sonner';

import useTheme from './hooks/useTheme';

import LoadingBackdrop from './components/Loading/LoadingBackdrop';
import Router from './views/Router';

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <Toaster richColors position="top-center" />
      <LoadingBackdrop />
    </ThemeProvider>
  );
};
export default App;
