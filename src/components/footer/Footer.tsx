import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoImage from '../../../public/assets/Logo2.png'; // Assuming create-react-app's import image feature
import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// Styles
const useStyles = makeStyles(() => ({
  toolbar: {
    height: '15rem',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginLeft: '7%',
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    height: 'auto',
    maxWidth: '250px',
  },
  box: {
    flexGrow: 1,
    justifyContent: 'center',
    marginLeft: '20px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <img src={LogoImage} alt="Logo" className={classes.logo} />
      <Box className={classes.box}>
        <Typography>Lorem ipsum dolor, sit. similique.</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography>Lorem ipsum dolor, sit. similique.</Typography>
      </Box>
    </Toolbar>
  );
};

export default Footer;
