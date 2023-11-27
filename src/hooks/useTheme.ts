import { createTheme } from '@mui/material/styles';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

import darkTheme from '@/themes/darkTheme';

const defaultBorderRadius = '0.75rem';

const useTheme = () =>
  createTheme({
    palette: {
      mode: 'dark',
      ...darkTheme,
    },
    typography: {
      fontFamily: 'Nunito',
      body1: {
        fontSize: '1.1rem',
        fontWeight: '400',
      },
      body2: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
          ...({
            roundedBottom: {
              borderRadius: '0 0 1rem 1rem',
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            },
          } as Partial<OverridesStyleRules<'root', 'MuiPaper'>>),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            [`& div`]: {
              borderRadius: defaultBorderRadius,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(2px)',
          },
        },
      },
    },
  });

export default useTheme;
