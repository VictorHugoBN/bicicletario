import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#CD6A00',
      light: '#CD8702',
      dark: '#9D5200',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFD580',
      light: '#FFEAB6',
      dark: '#B28900',
    },
    text: {
      primary: 'rgba(205,106,0,0.87)',
      secondary: 'rgba(205,135,2,0.54)',
      disabled: 'rgba(205,135,2,0.38)',
    },
    background: {
      default: '#FFF3E0',
      paper: '#FFECB3',
    },
  },
  typography: {
    fontFamily: 'Amaranth',
  },
});
