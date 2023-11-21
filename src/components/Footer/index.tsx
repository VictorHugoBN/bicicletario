import { Box, Theme, Toolbar, Typography } from '@mui/material';
import FooterLogo from '../../../public/assets/Bicicletário fácil Logo Principal Transparente.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footerToolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
  },
  footerLogo: {
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.up('md')]: {
      height: '250px',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box>
      <Toolbar className={classes.footerToolbar}>
        <img src={FooterLogo} alt="Logo" className={classes.footerLogo} />
        <Box>
          <Box>
            <Typography>Lorem ipsum dolor, sit. similique.</Typography>
          </Box>
          <Box>
            <Typography>Lorem ipsum dolor, sit. similique.</Typography>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Footer;
