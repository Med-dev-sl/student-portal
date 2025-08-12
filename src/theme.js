import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Black
      contrastText: '#fff', // White text on black
    },
    secondary: {
      main: '#fff', // White
      contrastText: '#000', // Black text on white
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
});

export default theme;
