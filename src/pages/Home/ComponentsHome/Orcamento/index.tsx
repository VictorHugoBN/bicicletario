import { Box, Typography, Button } from '@mui/material';
import { theme } from '../../../../styles/theme';
import TodayIcon from '@mui/icons-material/Today';
import PhoneIcon from '@mui/icons-material/Phone';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import bicicletarioImage from '../../../../assets/bicicletarioHome.jpg';
import { useNavigate } from 'react-router-dom';

const Orcamento = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column-reverse',
          alignItems: 'center',
          height: 'auto',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          margin: 0,
          [theme.breakpoints.down('lg')]: {
            flexDirection: 'column-reverse',
            alignItems: 'center',
          },
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
            minHeight: '300px',
          }}
        >
          <Typography
            align="center"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: '2rem',
              [theme.breakpoints.down('lg')]: {
                fontSize: '1',
                fontWeight: 450,
              },
            }}
          >
            Solicite um Orçamento Personalizado!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              [theme.breakpoints.down('lg')]: {
                flexDirection: 'column',
              },
            }}
          >
            <Button
              startIcon={<TodayIcon sx={{ width: '2rem', height: '2rem' }} />}
              sx={{
                fontFamily: 'Amaranth',
                fontSize: '0.8rem',
              }}
              onClick={() => navigate('/orcamento')}
            >
              Orçamento
            </Button>
            <Button
              startIcon={<PhoneIcon sx={{ width: '2rem', height: '2rem' }} />}
              sx={{
                fontFamily: 'Amaranth',
                fontSize: '0.8rem',
              }}
              onClick={() => navigate('/fale-conosco')}
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
              display: 'flex',
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
              [theme.breakpoints.down('lg')]: {
                width: '100%',
                height: '100%',
                display: 'none',
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
                onClick={() => navigate('/galeria')}
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
