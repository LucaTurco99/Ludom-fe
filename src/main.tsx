import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import getKeycloak from './config/keycloak';
import { router } from './route.tsx';

const queryClient = new QueryClient();
const keycloak = getKeycloak();

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <ReactKeycloakProvider authClient={keycloak}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  </ReactKeycloakProvider>
)
