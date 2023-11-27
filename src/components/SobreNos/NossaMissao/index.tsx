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
        padding: '3rem 20rem',
        [theme.breakpoints.down('md')]: {
          padding: '1rem 1rem',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: '#160054',
          color: 'white',
          padding: '3rem',
          borderRadius: '1.5rem',
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 600,
              marginTop: '0.4rem',
            }}
          >
            Valores
          </Typography>
          <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 600,
              marginTop: '0.4rem',
            }}
          >
            Visão
          </Typography>
          <Typography sx={{ fontFamily: 'Niramit', fontSize: '1.2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
