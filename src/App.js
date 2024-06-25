import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import Details_Residence from './components/pages/Details_Residence'
import Details_Villa from './components/pages/Details_Villa';
import Details_Apartment from './components/pages/Details_Apartment';
import Details_Condominium from './components/pages/Detail_Condominium';
import Details_Row from './components/pages/Details_Row';
import Footer from './components/Footer';
import About from './components/pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' exact Component = {Home}/>
          <Route path='/About' exact Component={About}/>
          <Route path='/ContactUs' exact Component = {ContactUs}/>
          <Route path='/Details_Residence' exact Component={Details_Residence}/>
          <Route path='/Details_Villa' exact Component={Details_Villa}/>
          <Route path='/Details_Apartment' exact Component={Details_Apartment}/>
          <Route path='/Details_Condominium' exact Component={Details_Condominium}/>
          <Route path='/Details_Row' exact Component={Details_Row}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;