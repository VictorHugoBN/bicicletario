import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { Home } from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SobreNos } from './pages/SobreNos';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobreNos" element={<SobreNos />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
