import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

function Navbar() {

  const { keycloak } = useKeycloak();

  return (
    <div className='container-fluid p-0'>

      <div className="text-white d-flex justify-content-between align-items-center p-3 bg-dark shadow-sm" style={{ height: '60px', fontSize: '1.1rem' }}>
        <div className="fw-bold">LOGO</div>
        <div className="d-flex gap-3">
          <Link to="/home" className="text-decoration-none text-white d-flex align-items-center">
            <i className="bi bi-house me-1"></i> Home
          </Link>
          <Link to="/home" className="text-decoration-none text-white d-flex align-items-center">
            <i className="bi bi-bell me-1"></i> Notification
          </Link>
          <Link to="/home" className="text-decoration-none text-light d-flex align-items-center">
            <i className="bi bi-person me-1"></i> MyProfile
          </Link>

          {keycloak.authenticated ? (
            <button style={{ fontSize: '1.1rem' }} className="btn btn-light" onClick={() => keycloak.logout()}><i className="bi bi-box-arrow-in-left me-2"></i>Logout</button>
          ) : (
            <button style={{ fontSize: '1.1rem' }} className="btn btn-primary" onClick={() => keycloak.login()}><i className="bi bi-box-arrow-in-right me-2"></i>Login</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;