import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Error = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '12rem' }}>
          Erro 404!
        </Typography>
        <Typography variant="h1" sx={{ fontSize: '5rem' }}>
          Pagina não encontrada
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default Error;
