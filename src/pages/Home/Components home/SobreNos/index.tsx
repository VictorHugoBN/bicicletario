import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../../../styles/theme';
import SpeedIcon from '@mui/icons-material/Speed';
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const SobreNos = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '4rem',
          }}
        >
          {/* Responsive header text */}
          <Typography
            variant="h2"
            align="center"
            fontWeight={600}
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: theme.palette.primary.main,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            padding: { xs: '2rem 0', md: '4rem 0' },
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // Changes direction based on screen size
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                width: { xs: '60%', sm: '40%', md: '25%' },
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
              }}
            >
              <SpeedIcon
                sx={{
                  color: 'secondary.main',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: '60%', sm: '40%', md: '25%' },
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
              }}
            >
              <PaidIcon
                sx={{
                  color: 'secondary.main',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: '60%', sm: '40%', md: '25%' },
                backgroundColor: theme.palette.primary.main,
                padding: '3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: { xs: '2rem', md: 0 },
              }}
            >
              <AssignmentTurnedInIcon
                sx={{
                  color: 'secondary.main',
                  width: '4rem',
                  height: '4rem',
                }}
              />
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  fontSize: '1.4rem',
                  textAlign: 'center',
                  fontFamily: 'Niramit',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SobreNos;
