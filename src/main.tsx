import React from 'react';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error/Index.js';
import { Home } from './pages/Home/index.js';
import { SobreNos } from './pages/SobreNos/index.js';
import { Orcamento } from './pages/Orcamento/index.js';
import { Sucesso } from './pages/SucessoSolicitacao/index.js';
import { theme } from './styles/theme.js';
import { Erro } from './pages/ErroSolicitacao/index.js';
import { FaleConosco } from './pages/FaleConosco/index.js';
import { VisitaTecnicaUI } from './components/Orcamento/VisitaTecnica/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
        element: <VisitaTecnicaUI />,
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
