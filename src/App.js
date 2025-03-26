import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage/about';
import ExperiencePage from './pages/ExperiencePage/experience';
import HomePage from './pages/HomePage/home';
import Footer from './components/footer';
import Navbar from './components/navbar';

function Header() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <header className='App-header'>
      <Link to='/'>
        <img src={logo} className='App-logo' alt='logo' />
      </Link>
      <Navbar />
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
