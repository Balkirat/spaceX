import { createMuiTheme } from '@material-ui/core/styles';
 
const arcBlue = '#2196F3';
const lightBlue = '#2196F3';
 
export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: lightBlue,
      white: '#fff'
    }
  },
});