import React from 'react';
import './App.scss';

import About from './pages/About/About';
import Articles from './pages/Articles/Articles';
import Contacts from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing';
import Navigation from './commons/Navigation/Navigation';
import Footer from './commons/Footer/footer';
import Experience from './pages/Experience/Experience';

const Root = () => {
  return (
    <div className="App">
      <Navigation />
        <Landing />
        <About />
        <Experience />
        <Articles />
        <Contacts />
      <Footer />
    </div>
  );
;}

export default Root;
