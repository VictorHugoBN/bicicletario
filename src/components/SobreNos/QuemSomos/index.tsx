import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import bicicletarioImage from '../../../assets/img_home.jpg';

export const QuemSomos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem 4rem',
        [theme.breakpoints.down('lg')]: {
          padding: '2rem',
          flexDirection: 'column',
          gap: '0',
          marginTop: '0',
          height: '100%',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '2rem 4rem',
          [theme.breakpoints.down('lg')]: {
            padding: '1rem 1rem',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: '#CD6A00',
            fontWeight: 600,
          }}
        >
          Quem somos nós?
        </Typography>
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 600,
            marginTop: '0.5rem',
          }}
        >
          Sua melhor opção em bicicletários no Rio de Janeiro
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
            marginTop: '1rem',
          }}
        >
          A Bicicletario Fácil nasceu da paixão pelo ciclismo e da necessidade
          de criar soluções inteligentes para estacionamento de bicicletas. Com
          uma equipe dedicada e experiente, nos especializamos em projetar e
          instalar bicicletários seguros, funcionais e esteticamente agradáveis.
          Nosso compromisso é com a inovação e a sustentabilidade, buscando
          constantemente formas de melhorar a experiência dos ciclistas urbanos.
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
            marginTop: '1.5rem',
          }}
        >
          Desde a nossa fundação, temos orgulho em oferecer produtos que não
          apenas atendem, mas superam as expectativas dos nossos clientes. Seja
          em áreas residenciais, comerciais ou públicas, cada projeto é uma
          oportunidade para demonstrarmos nossa habilidade em criar espaços que
          valorizam tanto a funcionalidade quanto o design.
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
            marginTop: '1.5rem',
          }}
        >
          Na Bicicletario Fácil, acreditamos que um bom bicicletário é mais do
          que um simples local para estacionar bicicletas. É um investimento na
          mobilidade urbana, na saúde da comunidade e no meio ambiente. Junte-se
          a nós nesta jornada para transformar as cidades em lugares mais
          amigáveis para os ciclistas.
        </Typography>
      </Box>
      <img
        src={bicicletarioImage}
        alt="oooo"
        style={{
          width: isMobile ? '100%' : '50%',
          height: isMobile ? 'auto' : '65hv',
          borderRadius: '1.5rem',
        }}
      />
    </Box>
  );
};
