import axios from "axios";
import keycloak from "./keycloak";


const apiClient = axios.create({
    baseURL: "http://localhost:8090", 
    timeout: 10000,
  });
  
  apiClient.interceptors.request.use(
    async (config) => {
      const keycloakInstance = keycloak();

      if (keycloakInstance.token) {
        console.log("Token trovato:", keycloakInstance.token);
        config.headers.Authorization = `Bearer ${keycloakInstance.token}`; 
      } else {
        console.error("Token non trovato. L'utente è autenticato?");
      }
      return config;
    },
    (error) => {
      return Promise.reject(error); 
    }
  );

  
  export default apiClient;