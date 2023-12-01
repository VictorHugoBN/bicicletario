import { Box, Container, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SobreNos from './ComponentsHome/SobreNos';
import Galeria from './ComponentsHome/Galeria';
import Orcamento from './ComponentsHome/Orcamento';
import { Helmet } from 'react-helmet';
import { keywords } from '../../utils/utils';
import bicicletarioHomeImage from '../../assets/bicicletarioHome.jpg';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const useStyles = makeStyles((theme: Theme) => ({
  sectionOneContainer: {
    backgroundImage: `url(${bicicletarioHomeImage})`,
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
    [theme.breakpoints.down('lg')]: {
      height: '25%',
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
            color="white"
            sx={{
              position: 'relative',
              zIndex: 1,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
            component="h1"
            variant="h2"
          >
            Bicicletario Fácil
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
            Soluções Sob Medida para Seu Mundo Ciclístico no Rio De Janeiro!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const Home = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const sobreNosAnimation = useScrollAnimation();
  const galeriaAnimation = useScrollAnimation();
  const orcamentoAnimation = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Bicicletario Fácil - Rio De Janeiro</title>
        <meta
          name="description"
          content="Soluções Sob Medida para Seu Mundo Ciclístico no Rio De Janeiro!"
        />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <FirstHomeComponent />
      <motion.div
        variants={variants}
        initial="hidden"
        animate={sobreNosAnimation.controls}
        ref={sobreNosAnimation.ref}
      >
        <SobreNos />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={galeriaAnimation.controls}
        ref={galeriaAnimation.ref}
      >
        <Galeria />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={orcamentoAnimation.controls}
        ref={orcamentoAnimation.ref}
      >
        <Orcamento />
      </motion.div>
    </>
  );
};

export default Home;
