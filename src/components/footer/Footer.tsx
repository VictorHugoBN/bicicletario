import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box>
      <img
        src="../../../public/assets/Logo2.png"
        alt="Logo2"
        style={{
          // display: { xs: 'flex', md: 'none' },

          marginLeft: '0.5%', // Ajuste o espaçamento direito conforme necessário
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          height: 'auto', // Ajuste a altura conforme necessário
          maxWidth: '150px', // Garante que a imagem não exceda a largura máxima
        }}
      />
    </Box>
  );
};

export default Footer;
