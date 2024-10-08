import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import bicicletarioImage from '../../../../assets/img_home.jpg';
import { useNavigate } from 'react-router-dom';

const Galeria = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Box
      onClick={() => navigate('/galeria')}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        padding: isSmall || isXSmall ? '1rem 0 1rem 0' : '2rem',
        [theme.breakpoints.down('sm')]: {
          height: '50vh',
        },
        cursor: 'pointer',
      }}
    >
      <Container maxWidth={false}>
        {/* Responsive header text */}
        <Typography
          variant="h2"
          align="center"
          fontWeight={600}
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            color: theme.palette.primary.main,
            marginBottom: '2rem',
          }}
        >
          Explore Nossa Galeria de Projetos
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <img
            src={bicicletarioImage}
            alt="Gallery Image"
            style={{
              width: '100%',
              height: 'auto',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional shadow for depth
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Galeria;
