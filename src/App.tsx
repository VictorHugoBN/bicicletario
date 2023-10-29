import { useState } from 'react';
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
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../public/assets/Bicicletário fácil Logo Preto Fundo.svg';
import FooterLogo from '../public/assets/Bicicletário fácil Logo Principal Transparente.svg';
import { makeStyles, useTheme } from '@mui/styles';
import SpeedIcon from '@mui/icons-material/Speed';
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import './index.css';
import bicicletarioImage from '../public/assets/bicicletarioHome.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TodayIcon from '@mui/icons-material/Today';
import PhoneIcon from '@mui/icons-material/Phone';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

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
  footerLogo: {
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
  footerToolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
  },

  sectionOneContainer: {
    backgroundImage: 'url(../public/assets/bicicletarioHome.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 'calc(100vh - 150px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  sectionOneMainTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '1rem',
    height: '50%',
    [theme.breakpoints.down('md')]: {
      minHeight: '50vh',
    },
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

const App: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pages = ['Home', 'Sobre nós', 'Galeria', 'Orçamento', 'Fale conosco'];
  const theme: Theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // TODO: Move this to a separate component
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

  // TODO: Move this to a separate component
  const Section1 = (
    <Box className={classes.sectionOneContainer}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      ></Box>

      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box className={classes.sectionOneMainTextContainer}>
          <Typography
            align="center"
            variant="h2"
            color="white"
            sx={{
              position: 'relative',
              zIndex: 1,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Welcome to Our Website
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            color="white"
            sx={{
              position: 'relative',
              zIndex: 1,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            We provide amazing solutions for your needs.
          </Typography>
        </Box>
      </Container>
    </Box>
  );

  // TODO: Move this to a separate component
  const Section2 = (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '4rem',
          }}
        >
          {/* Responsive header text */}
          <Typography
            variant="h2"
            align="center"
            fontWeight={600}
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: theme.palette.primary.main,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            padding: { xs: '2rem 0', md: '4rem 0' },
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // Changes direction based on screen size
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                width: { xs: '60%', sm: '40%', md: '25%' },
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
              }}
            >
              <SpeedIcon
                sx={{
                  color: 'secondary.main',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: '60%', sm: '40%', md: '25%' },
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
              }}
            >
              <PaidIcon
                sx={{
                  color: 'secondary.main',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: '60%', sm: '40%', md: '25%' },
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
              }}
            >
              <AssignmentTurnedInIcon
                sx={{
                  color: 'secondary.main',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // TODO: Move this to a separate component
  const Section3 = (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: '1rem',
      }}
    >
      <Container maxWidth={false}>
        {/* Responsive header text */}
        <Typography
          variant="h2"
          align="center"
          fontWeight={600}
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            color: theme.palette.primary.main,
            marginBottom: '2rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          {!isMobile && (
            <IconButton
              aria-label="previous image"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: '#CCC4D6',
                },
                margin: '1rem',
                [theme.breakpoints.down('sm')]: {
                  width: '2rem',
                  height: '2rem',
                },
              }}
            >
              <KeyboardArrowLeftIcon sx={{ width: '3rem', height: '3rem' }} />
            </IconButton>
          )}

          <img
            src={bicicletarioImage}
            alt="Gallery Image"
            style={{
              width: '100%',
              maxWidth: '1200px',
              borderRadius: '2rem',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional shadow for depth
            }}
          />

          {!isMobile && (
            <IconButton
              aria-label="next image"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: '#CCC4D6',
                },
                margin: '1rem',
                [theme.breakpoints.down('sm')]: {
                  width: '2rem',
                  height: '2rem',
                },
              }}
            >
              <KeyboardArrowRightIcon sx={{ width: '3rem', height: '3rem' }} />
            </IconButton>
          )}
        </Box>
      </Container>
    </Box>
  );

  // TODO: Move this to a separate component
  const Section4 = (
    <Box
      sx={{
        height: { xs: 'auto', md: '100vh' },
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: { xs: 'center', md: 'stretch' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              backgroundColor: 'secondary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '2rem',
              paddingY: '4rem',
            }}
          >
            <Typography
              align="center"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: '2.5rem',
              }}
            >
              Faça seu orçamento!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column',
                },
              }}
            >
              <Button
                startIcon={<TodayIcon sx={{ width: '2rem', height: '2rem' }} />}
                sx={{
                  fontFamily: 'Amaranth',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                }}
              >
                Orcamento
              </Button>
              <Button
                startIcon={<PhoneIcon sx={{ width: '2rem', height: '2rem' }} />}
                sx={{
                  fontFamily: 'Amaranth',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                }}
              >
                Contato
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: theme.palette.primary.main,
              position: 'relative',
            }}
          >
            <img
              src={bicicletarioImage}
              alt="oooo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <Box
                width={'50%'}
                height={'50%'}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '2rem',
                  borderRadius: '1rem',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    lineHeight: '3rem',
                  }}
                >
                  Acesse a Galeria para mais fotos!
                </Typography>
                <Button
                  variant="contained"
                  startIcon={
                    <PhotoLibraryIcon sx={{ width: '2rem', height: '2rem' }} />
                  }
                  sx={{
                    fontFamily: 'Amaranth',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    paddingX: '1.5rem',
                    paddingY: '0.5rem',
                    borderRadius: '1rem',
                    marginTop: '2rem',
                  }}
                >
                  Galeria
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // TODO: Move this to a separate component
  const Header = (
    <AppBar position="static" className={classes.headerAppBar}>
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

  // TODO: Move this to a separate component
  const Footer = (
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

  return (
    <div>
      {/* Header Implementation */}
      {Header}
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

      {/* Section 1 implementation */}
      {Section1}

      {/* Section 2 implementation */}
      {Section2}

      {/* Section 3 implementation */}
      {Section3}

      {/* Section 4 implementation */}
      {Section4}

      {/* Footer Implementation */}
      {Footer}
    </div>
  );
};

export default App;
