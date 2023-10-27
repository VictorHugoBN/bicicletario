import { Box, Typography } from '@mui/material';

import bicicletarioImage from '../../../../public/assets/bicicletarioHome.jpg';

export const QuemSomos = () => {
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
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '2rem 4rem',
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
        style={{ width: '50%', height: '65vh', borderRadius: '1.5rem' }}
      />
    </Box>
  );
};
