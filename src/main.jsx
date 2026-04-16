import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContextProvider from './ContextAPI/Context.jsx';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routes from "./router/router.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
      <ToastContainer />
    </ContextProvider>
  </StrictMode>,
)
