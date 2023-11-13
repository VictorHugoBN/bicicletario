import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../../utils/enums/Routes';

export function Header() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: 'linear-gradient(to left, #CD6A00, #CD8702)', // Substitua as cores conforme necessário
      }}
    >
      <Toolbar disableGutters>
        <img
          src="../../../public/assets/Logo.png"
          alt="Logo"
          onClick={() => navigate(`/`)}
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
            cursor: 'pointer',
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
          }}
        >
          {Routes.values.map((page) => (
            <Button
              key={page}
              onClick={() => navigate(`/${page}`)}
              sx={{ my: 4, mx: 4, color: 'white', display: 'block' }}
            >
              {Routes.getLabel(page)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
