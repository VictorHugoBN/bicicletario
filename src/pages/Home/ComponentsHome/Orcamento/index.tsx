import { Box, Typography, Button } from '@mui/material';
import { theme } from '../../../../styles/theme';
import TodayIcon from '@mui/icons-material/Today';
import PhoneIcon from '@mui/icons-material/Phone';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import bicicletarioImage from '../../../../../public/assets/bicicletarioHome.jpg';

const Orcamento = () => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100vh' },
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: { xs: 'center', md: 'stretch' },
          margin: 0,
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: 'secondary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '2rem',
            width: '100%',
          }}
        >
          <Typography
            align="center"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: '2.5rem',
            }}
          >
            Solicite um Orçamento Personalizado!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
              },
            }}
          >
            <Button
              startIcon={<TodayIcon sx={{ width: '2rem', height: '2rem' }} />}
              sx={{
                fontFamily: 'Amaranth',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              Orçamento
            </Button>
            <Button
              startIcon={<PhoneIcon sx={{ width: '2rem', height: '2rem' }} />}
              sx={{
                fontFamily: 'Amaranth',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              Contato
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: 'secondary.main',
            position: 'relative',
          }}
        >
          <img
            src={bicicletarioImage}
            alt="oooo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '2rem',
              width: '50%',
              height: '50%',
              [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '2rem',
                borderRadius: '1rem',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  textAlign: 'center',
                  lineHeight: '3rem',
                }}
              >
                Acesse a galeria!
              </Typography>
              <Button
                variant="contained"
                startIcon={
                  <PhotoLibraryIcon sx={{ width: '2rem', height: '2rem' }} />
                }
                sx={{
                  fontFamily: 'Amaranth',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  paddingX: '1.5rem',
                  paddingY: '0.5rem',
                  borderRadius: '1rem',
                  marginTop: '2rem',
                }}
              >
                Galeria
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Orcamento;
