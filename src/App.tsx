import React from 'react';

import './App.css';
import LandingPage from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './styles/components/navigation/Layout';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Articles from './pages/Articles/Articles';

import { GlobalStyles } from './global';
import { theme } from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
