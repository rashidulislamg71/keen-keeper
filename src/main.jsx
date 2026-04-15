import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContextProvider, { Context } from './ContextAPI/Context.jsx';
import { RouterProvider } from 'react-router-dom';
import routers from './router/Router.jsx';
import { ToastContainer, Bounce } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={routers} />
      <ToastContainer
        position="top-center"
        autoClose={100}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      transition={Bounce}
      />
    </ContextProvider>
  </StrictMode>,
)
