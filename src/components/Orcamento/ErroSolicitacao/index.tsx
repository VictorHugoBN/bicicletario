import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ErroSolicitacao = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: '4rem 10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '20rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
          padding: '3rem 5rem',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        }}
      >
        <CloseIcon sx={{ width: '7rem', height: '7rem', color: 'red' }} />
        <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: 'red' }}>
          Erro!
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 500,
            fontFamily: 'Niramit',
            textAlign: 'center',
            lineHeight: '1.8rem',
            marginTop: '1rem',
          }}
        >
          Não foi possível realizar sua solicitação, tente novamente.
        </Typography>
        <Button
          sx={{
            fontFamily: 'Niramit',
            fontSize: '1.3rem',
            fontWeight: 500,
            textTransform: 'none',
            width: '8rem',
            marginTop: '1.5rem',
            backgroundColor: 'primary.main',
            color: 'white',
            ':hover': {
              backgroundColor: 'primary.light',
            },
          }}
          onClick={() => navigate('/')}
        >
          Voltar
        </Button>
      </Box>
    </Box>
  );
};
