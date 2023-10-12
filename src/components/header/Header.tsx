import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Sobre nós', 'Galeria', 'Orçamento', 'Fale conosco'];

function Header() {
  return (
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="../../../public/assets/Logo.png"
            alt="Logo"
            style={{
              // display: { xs: 'flex', md: 'none' },
              marginRight: '',
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => null}
                sx={{ my: 4, mx: 4, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
