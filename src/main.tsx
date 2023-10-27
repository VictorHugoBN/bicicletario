import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/index.js';
import { SobreNos } from './pages/SobreNos/index.js';
import Error from './pages/Error/Index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sobre',
        element: <SobreNos />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
const theme = createTheme();

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
