import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider} from './components/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';

import NavBar from "./components/NavBar.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import TournamentPage from "./components/TournamentPage.js"
import Register from "./components/Register.js"
import Contact from "./components/Contact.js"


function App() {


  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tournament" element={<TournamentPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Profile" element={<div>Profile</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
