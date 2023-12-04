import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme.js';
import Home from './pages/Home/index.js';
import { SobreNos } from './pages/SobreNos/index.js';
import { Orcamento } from './pages/Orcamento/index.js';
import Sucesso from './pages/Sucesso/index.js';
import Erro from './pages/Erro/index.js';
import FaleConosco from './pages/FaleConosco/index.js';
import VisitaTecnica from './pages/VisitaTecnica/index.js';
import { OrcamentoCalculado } from './pages/OrcamentoCalculado/index.js';
import './index.css';
import Galeria from './pages/Galeria/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
      {
        path: 'sobrenos',
        element: <SobreNos />,
      },
      {
        path: 'orcamento',
        element: <Orcamento />,
      },
      {
        path: 'sucesso-solicitacao',
        element: <Sucesso />,
      },
      {
        path: 'erro-solicitacao',
        element: <Erro />,
      },
      {
        path: 'fale-conosco',
        element: <FaleConosco />,
      },
      {
        path: 'visita-tecnica',
        element: <VisitaTecnica />,
      },
      {
        path: 'orcamento-calculado',
        element: <OrcamentoCalculado />,
      },
      {
        path: 'galeria',
        element: <Galeria />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Element with ID "root" not found.');
}
