import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <RouterProvider router={router} />
  </MantineProvider>
)

