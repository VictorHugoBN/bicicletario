import { Box, Button, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../styles/theme';

const useStyles = makeStyles((theme: Theme) => ({
  box1: {
    width: '25%',
    padding: '3rem',
    borderRadius: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
    minHeight: '75%',
  },
}));

export const OpcoesOrcamento = () => {
  const wppMessage = `Olá, gostaria de solicitar uma visita técnica da Bicicletario Fácil - Rio De Janeiro`;
  const wppMessage2 = `Olá, gostaria de solicitar um orçamento da Bicicletario Fácil - Rio De Janeiro`;
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 7rem',
        gap: '2.5rem',
        height: '100vh',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
          height: 'auto',
          padding: '3rem 4rem',
        },
      }}
    >
      <Box className={classes.box1} sx={{ backgroundColor: 'primary.main' }}>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.8rem',
          }}
          align="center"
        >
          Visita Técnica
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
          }}
          align="center"
        >
          Opte pela nossa Visita Técnica e tenha uma avaliação detalhada no
          local. Nossos especialistas visitarão o local desejado para entender
          suas necessidades específicas, avaliar o espaço disponível e sugerir
          as melhores soluções em bicicletários. Essa abordagem personalizada
          garante que o projeto final atenda exatamente às suas expectativas e
          requisitos.
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
          onClick={() => {
            const formattedUrl = wppMessage.replace(/ /g, '%20');
            window.open(
              `https://api.whatsapp.com/send?phone=5521985100734&text=${formattedUrl}`,
              '_blank',
            );
          }}
        >
          Solicite
        </Button>
      </Box>
      <Box className={classes.box1} sx={{ backgroundColor: 'primary.main' }}>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.8rem',
          }}
          align="center"
        >
          Orçamento Calculado
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
          }}
          align="center"
        >
          Escolha o Orçamento Calculado para um planejamento rápido e eficiente.
          Com base nas informações fornecidas por você, calcularemos um
          orçamento detalhado para o seu projeto de bicicletário. Este serviço é
          ideal para quem já tem uma ideia clara do que precisa e busca uma
          estimativa de custo rápida e precisa.
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
      <Box className={classes.box1} sx={{ backgroundColor: 'primary.main' }}>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.8rem',
          }}
          align="center"
        >
          Orçamento por Consulta
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
          }}
          align="center"
        >
          Com o Orçamento por Consulta, mergulhamos profundamente em suas
          necessidades e visões. Este serviço é perfeito para projetos mais
          complexos ou personalizados, onde cada detalhe conta. Nossos
          especialistas trabalharão com você para entender cada aspecto do seu
          projeto, garantindo um orçamento que reflita todas as suas
          necessidades e desejos específicos.
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
          onClick={() => {
            const formattedUrl = wppMessage2.replace(/ /g, '%20');
            window.open(
              `https://api.whatsapp.com/send?phone=5521985100734&text=${formattedUrl}`,
              '_blank',
            );
          }}
        >
          Solicite
        </Button>
      </Box>
    </Box>
  );
};
