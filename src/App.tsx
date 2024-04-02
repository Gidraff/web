import React from 'react';

import './App.css';
import LandingPage from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import Layout from './styles/components/navigation/Layout';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Articles from './pages/Articles/Articles';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Layout>
  );
}

export default App;
