import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Theme,
  Drawer,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../../../public/assets/Bicicletário fácil Logo Preto Fundo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  headerLogo: {
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.up('md')]: {
      height: '250px',
    },
  },

  headerAppBar: {
    // TODO: Change to use theme
    backgroundImage: 'linear-gradient(to left, #CD6A00, #CD8702)',
    margin: 0,
    padding: 0,
    maxHeight: '150px',
    boxShadow:
      'rgba(255, 255, 255 ,0.3) 0px 1px 2px 0px, rgba(255, 255, 255 ,0.15) 0px 2px 6px 2px',
  },
  headerTollbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  headerButton: {
    color: 'white',
    display: 'block',
  },
  drawerPaper: {
    width: '100%',
    height: '100vh',
    // TODO: Change to use theme
    backgroundColor: '#CD6A00',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('md')]: {
      width: '350px',
    },
  },
  drawerItem: {
    color: 'white',
    padding: '12px',
    width: '100%',
    fontSize: '18px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const pages = ['Home', 'Sobre nós', 'Galeria', 'Orçamento', 'Fale conosco'];

  const drawer = (
    <div className={classes.drawerPaper}>
      {pages.map((page) => (
        <Button
          variant="text"
          size="large"
          key={page}
          onClick={handleDrawerToggle}
          className={classes.drawerItem}
        >
          <Typography color="white" fontWeight={600}>
            {page}
          </Typography>
        </Button>
      ))}
    </div>
  );

  return (
    <AppBar position="static" className={classes.headerAppBar}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        classes={{
          paper: classes.drawerPaper,
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
      <Toolbar className={classes.headerTollbar}>
        <img src={Logo} alt="Logo" className={classes.headerLogo} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              className={classes.headerButton}
              key={page}
              onClick={() => null}
              sx={{ mx: 2 }}
            >
              <Typography color="white" fontWeight={600} fontSize="18px">
                {page}
              </Typography>
            </Button>
          ))}
        </Box>
        <IconButton
          size="large"
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ ml: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
