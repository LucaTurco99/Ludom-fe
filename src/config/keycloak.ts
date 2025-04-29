import axios from "axios";
import Keycloak from "keycloak-js";

let keycloakInstance: Keycloak | null = null;

const getKeycloak = () => {
  if (!keycloakInstance) {
    console.log("Creating Keycloak instance");
    keycloakInstance = new Keycloak({
      url: "http://localhost:8080", 
      realm: "Develop", 
      clientId: "DemoOAuth2", 
    });
  }
  return keycloakInstance;
};

export default getKeycloak;
