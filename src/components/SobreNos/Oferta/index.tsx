import { Box, Button, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import bicicletarioImage from '../../../../public/assets/bicicletarioHome.jpg';
import { useTheme } from '@mui/material/styles';

export const Oferta = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative' }}>
      <img
        src={bicicletarioImage}
        alt="oooo"
        style={{
          width: '100%',
          height: '300px',
          filter: 'brightness(0.5)',
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
            [theme.breakpoints.down('md')]: { fontSize: '1.8rem' },
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
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          }}
        >
          Teste grátis o bicicletário de 5 metros por um mês inteiro!
        </Typography>
        <Button
          startIcon={<PhoneIcon sx={{ width: '1.5rem', height: '1.5rem' }} />}
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
