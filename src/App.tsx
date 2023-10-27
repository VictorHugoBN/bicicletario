import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  Theme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import Logo from '../public/assets/Bicicletário fácil Logo Preto Fundo.svg';
import FooterLogo from '../public/assets/Bicicletário fácil Logo Principal Transparente.svg';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  headerLogo: {
    height: '100px',
    [theme.breakpoints.up('sm')]: {
      height: '150px',
    },
    [theme.breakpoints.up('md')]: {
      height: '200px',
    },
  },
  footerLogo: {
    height: '100px',
    [theme.breakpoints.up('sm')]: {
      height: '150px',
    },
    [theme.breakpoints.up('md')]: {
      height: '200px',
    },
  },
  headerAppBar: {
    backgroundImage: 'linear-gradient(to left, #CD6A00, #CD8702)',
    margin: 0,
    padding: 0,
    maxHeight: '150px',
  },
  headerTollbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  footerToolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  drawerPaper: {
    width: '250px',
    backgroundColor: '#CD6A00',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('md')]: {
      width: '350px',
    },
  },
  drawerItem: {
    padding: '12px 16px',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#CD8702',
    },
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pages = ['Home', 'Sobre nós', 'Galeria', 'Orçamento', 'Fale conosco'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawerPaper}>
      {pages.map((page) => (
        <Button key={page} onClick={() => null} className={classes.drawerItem}>
          {page}
        </Button>
      ))}
    </div>
  );

  return (
    <div>
      <AppBar position="static" className={classes.headerAppBar}>
        <Toolbar className={classes.headerTollbar}>
          <img src={Logo} alt="Logo" className={classes.headerLogo} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => null}
                sx={{ my: 2, mx: 2, color: 'white' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
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
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        classes={{
          paper: classes.drawerPaper,
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>

      {[1, 2, 3, 4].map((section) => (
        <Box
          key={section}
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: section % 2 === 0 ? '#f0f0f0' : '#ffffff',
          }}
        >
          <Container>
            <Typography variant="h5">Section {section}</Typography>
          </Container>
        </Box>
      ))}
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
    </div>
  );
}

export default App;
