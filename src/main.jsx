import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContextProvider, { Context } from './ContextAPI/Context.jsx';
import { RouterProvider } from 'react-router-dom';
import routers from './router/Router.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={routers} />
      <ToastContainer />
    </ContextProvider>
  </StrictMode>,
)
