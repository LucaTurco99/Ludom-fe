import './App.css';
import Navbar from './components/core/Navbar';
import Content from './components/core/Content';
import Footer from './components/core/Footer';

function App() {
  return (
      <div className="app-container d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Content />
        </div>
        <Footer />
      </div>
  );
}

export default App;
