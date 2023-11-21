import {
  Box,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../../../../styles/theme';
import bicicletarioImage from '../../../../../public/assets/bicicletarioHome.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Galeria = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: '1rem',
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
              maxWidth: '1200px',
              borderRadius: '2rem',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional shadow for depth
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Galeria;
