
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Proyectos from './pages/Proyectos';

function App() {
  return (
    <>
    <Navbar/>
      <Router>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/projects" element={<Proyectos />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
