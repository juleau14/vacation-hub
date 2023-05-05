import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import TourPackages from './components/TourPackages/TourPackages';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <AboutUs />
      <TourPackages />
      <Testimonial />
    </React.Fragment>
  );
}

export default App;
