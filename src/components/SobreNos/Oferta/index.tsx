import { Box, Button, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import bicicletarioPng from '../../../../public/assets/bicicletarioHome.png';

export const Oferta = () => {
  return (
    <Box sx={{ position: 'relative', paddingY: '3rem' }}>
      <img
        src={bicicletarioPng}
        alt="oooo"
        style={{ width: '100%', height: '300px', filter: 'brightness(0.5)' }}
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
        }}
      >
        <Typography
          sx={{ fontSize: '2.3rem', color: 'white', fontWeight: 600 }}
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
