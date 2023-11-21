import { Box, Container, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SobreNos from '../SobreNos';
import Galeria from '../Galeria';
import Orcamento from '../Orcamento';
// import FaleConosco from '../FaleConosco';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const FirstHomeComponent = () => {
  const classes = useStyles();
  return (
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
};

const Home = () => {
  return (
    <>
      <FirstHomeComponent />
      <SobreNos />
      <Galeria />
      <Orcamento />
      {/* <FaleConosco /> */}
    </>
  );
};

export default Home;
