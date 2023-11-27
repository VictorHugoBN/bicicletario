import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const NossaMissao = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0rem 10rem',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('md')]: {
          padding: '1rem 1rem',
          height: '100%',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: '#160054',
          color: 'white',
          padding: '3rem',
          borderRadius: '1.5rem',
          maxWidth: '800px',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '1.8rem',
            fontWeight: 600,
          }}
        >
          Nossa Missão
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 600,
              marginTop: '1.4rem',
            }}
          >
            Missão
          </Typography>
          <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.2rem' }}>
            Nossa missão é inovar no design e na funcionalidade dos
            bicicletários, proporcionando soluções seguras, acessíveis e
            esteticamente agradáveis. Comprometemo-nos a melhorar a experiência
            dos ciclistas urbanos, contribuindo para uma mobilidade mais
            sustentável e cidades mais amigáveis para as bicicletas.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 600,
              marginTop: '1.5rem',
            }}
          >
            Valores
          </Typography>
          <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.2rem' }}>
            Os pilares da nossa empresa são a inovação, a sustentabilidade e o
            compromisso com a qualidade. Valorizamos a segurança, a
            funcionalidade e a durabilidade em nossos produtos. Acreditamos na
            ética, no respeito e na transparência nas relações com nossos
            clientes, parceiros e comunidade.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 600,
              marginTop: '1.5rem',
            }}
          >
            Visão
          </Typography>
          <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.2rem' }}>
            Nossa visão é ser líderes no mercado de bicicletários, inspirando
            mudanças positivas nas cidades ao redor do mundo. Aspiramos a criar
            ambientes urbanos mais seguros e acolhedores para os ciclistas,
            promovendo a mobilidade sustentável como um componente chave para o
            futuro das áreas urbanas.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
