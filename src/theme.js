import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme( {
    palette: {
        type: 'light',
      primary: {
          main: '#283593',
          light: '#5f5fc4',
          dark: '#001064',
    },
    secondary: {
        main: '#4527a0',
        light: '#7953d2',
        dark: '#000070',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#ffffff',
    },
},
});

export default theme;
