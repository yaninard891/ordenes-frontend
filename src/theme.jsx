import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E06F00', // naranja principal
      light: '#FF9133',
      dark: '#8F4400',
    },
    secondary: {
      main: '#AA8B62',
      light: '#F7EFE6',
      dark: '#6C5438',
    },
    background: {
      default: '#FCFAF7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E2216',
      secondary: '#8B6F4B',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Cantarell',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
