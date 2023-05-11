import React from 'react';
import './App.scss';

import About from './pages/About/About';
import Articles from './pages/Articles/Articles';
import Contacts from './pages/Contacts/contact';
import Landing from './pages/Landing/Landing';
import Navigation from './commons/Navigation/Navigation';
import Footer from './commons/Footer/footer';

const Root = () => {
  return (
    <div className="App">
      <Navigation />
        <Landing />
        <About />
        <Articles />
        <Contacts />
      <Footer />
    </div>
  );
;}

export default Root;
