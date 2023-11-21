import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { theme } from '../../../styles/theme';

export const OpcoesOrcamento = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100px',
        padding: '5rem 7rem',
        gap: '2.5rem',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          width: '25%',
          backgroundColor: 'primary.main',
          padding: '3rem',
          borderRadius: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.8rem',
          }}
        >
          Visita Técnica
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1.2rem',
            textAlign: 'center',
            fontFamily: 'Niramit',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button
          sx={{
            fontFamily: 'Amaranth',
            fontSize: '1.5rem',
            fontWeight: 600,
            background: 'white',
            color: '#160054',
            textTransform: 'none',
            width: '10rem',
            mt: '1rem',
            '&:hover': {
              background: 'white',
              color: '#160054',
              borderColor: 'red',
              borderWidth: '2rem',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            },
          }}
          onClick={() => navigate('/erro-solicitacao')}
        >
          Solicite
        </Button>
      </Box>

      <Box
        sx={{
          width: '25%',
          backgroundColor: 'primary.main',
          padding: '3rem',
          borderRadius: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.8rem',
          }}
        >
          Orçamento Calculado
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1.2rem',
            textAlign: 'center',
            fontFamily: 'Niramit',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button
          sx={{
            fontFamily: 'Amaranth',
            fontSize: '1.5rem',
            fontWeight: 600,
            background: 'white',
            color: '#160054',
            textTransform: 'none',
            width: '10rem',
            mt: '1rem',
            '&:hover': {
              background: 'white',
              color: '#160054',
              borderColor: 'red',
              borderWidth: '2rem',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            },
          }}
          onClick={() => navigate('/orcamento-calculado')}
        >
          Solicite
        </Button>
      </Box>

      <Box
        sx={{
          width: '25%',
          backgroundColor: 'primary.main',
          padding: '3rem',
          borderRadius: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.8rem',
          }}
        >
          Orçamento por Consulta
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1.2rem',
            textAlign: 'center',
            fontFamily: 'Niramit',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button
          sx={{
            fontFamily: 'Amaranth',
            fontSize: '1.5rem',
            fontWeight: 600,
            background: 'white',
            color: '#160054',
            textTransform: 'none',
            width: '10rem',
            mt: '1rem',
            '&:hover': {
              background: 'white',
              color: '#160054',
              borderColor: 'red',
              borderWidth: '2rem',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            },
          }}
          onClick={() => navigate('/sucesso-solicitacao')}
        >
          Solicite
        </Button>
      </Box>
    </Box>
  );
};
