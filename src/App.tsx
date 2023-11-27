import { CssBaseline, ThemeProvider } from '@mui/material';

import useTheme from './hooks/useTheme';

import Router from './views/Router';

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};
export default App;
