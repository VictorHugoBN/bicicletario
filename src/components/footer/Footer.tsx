import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
const Footer = () => {
  return (
    <Toolbar sx={{ height: '15rem', display: 'flex', alignItems: 'center' }}>
      <img
        src="../../../public/assets/Logo2.png"
        alt="Logo2"
        style={{
          // display: { xs: 'flex', md: 'none' },

          marginLeft: '7%', // Ajuste o espaçamento direito conforme necessário
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          height: 'auto', // Ajuste a altura conforme necessário
          maxWidth: '250px', // Garante que a imagem não exceda a largura máxima
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          marginLeft: '20pm',
        }}
      >
        <h1>oi</h1>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          marginLeft: '20pm',
        }}
      >
        <h1>oi</h1>
      </Box>
    </Toolbar>
  );
};

export default Footer;
