import { Box, Button, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import bicicletarioImage from '../../../assets/img_home.jpg';
import { useTheme } from '@mui/material/styles';

export const Oferta = () => {
  const theme = useTheme();
  const wppMessage = `Olá, gostaria saber mais sobre a oferta especial da Bicicletario Fácil - Rio De Janeiro`;
  return (
    <Box sx={{ position: 'relative', paddingY: '3rem' }}>
      <img
        src={bicicletarioImage}
        alt="oooo"
        style={{
          width: '100%',
          height: '300px',
          filter: 'brightness(0.5)',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          [theme.breakpoints.down('md')]: {},
        }}
      >
        <Typography
          sx={{
            fontSize: '2.3rem',
            color: 'white',
            fontWeight: 600,
            [theme.breakpoints.down('lg')]: { fontSize: '1.8rem' },
          }}
        >
          Oferta Especial
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: 'white',
            lineHeight: '2rem',
            fontFamily: 'Niramit',
            mt: '0.5rem',
            width: '60%',
            [theme.breakpoints.down('lg')]: {
              width: '100%',
            },
          }}
        >
          Teste grátis o bicicletário de 5 metros por um mês inteiro!
        </Typography>
        <Button
          startIcon={<PhoneIcon sx={{ width: '1.5rem', height: '1.5rem' }} />}
          onClick={() => {
            const formattedUrl = wppMessage.replace(/ /g, '%20');
            window.open(
              `https://api.whatsapp.com/send?phone=5521985100734&text=${formattedUrl}`,
              '_blank',
            );
          }}
          sx={{
            fontFamily: 'Amaranth',
            fontSize: '1.3rem',
            fontWeight: 600,
            color: 'white',
            background: '#CD8702',
            marginTop: '0.9rem',
            textTransform: 'none',
            paddingX: '2rem',
            borderRadius: '1.5rem',
            '&:hover': {
              backgroundColor: '#CD6A00',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#CD6A00',
            },
          }}
        >
          Contato
        </Button>
      </Box>
    </Box>
  );
};
