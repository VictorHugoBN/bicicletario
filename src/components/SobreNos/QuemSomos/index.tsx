import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import bicicletarioImage from '../../../../public/assets/bicicletarioHome.jpg';

export const QuemSomos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '4rem',
        marginTop: '100px',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          gap: '0',
          padding: '1rem 1rem',
          marginTop: '0',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '2rem 4rem',
          [theme.breakpoints.down('md')]: {
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
            fontWeight: 500,
            marginTop: '0.5rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
            marginTop: '1rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontFamily: 'Niramit',
            marginTop: '0.4rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      <img
        src={bicicletarioImage}
        alt="oooo"
        style={{
          width: isMobile ? '100%' : '50%', // Altera a largura com base em isMobile
          height: isMobile ? 'auto' : '65hv',
          borderRadius: '1.5rem', // Altera o borderRadius com base em isMobile
        }}
      />
    </Box>
  );
};
