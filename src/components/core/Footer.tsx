import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className='container-fluid p-0'>
        <div className="text-white d-flex justify-content-center align-items-center p-3 bg-primary " style={{ height: '50px', position: 'relative', bottom: 0, width: '100%' }}>
          <div className="d-flex gap-3 text-white">
            <small>Built with ❤️ using React ©{new Date().getFullYear()} | Luca Turco | <Link to="/privacy" className="text-decoration-none text-light">Privacy Policy</Link></small>
          </div>
        </div>
      </div>

    </>
  );
}

export default Footer;