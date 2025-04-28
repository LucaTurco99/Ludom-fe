import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='container-fluid p-0'>

        <div className="text-white d-flex justify-content-between align-items-center p-3 bg-dark shadow-sm" style={{ height: '60px' }}>
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
            <Link to="/home" className="text-decoration-none text-light d-flex align-items-center">
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Navbar;