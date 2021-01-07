import React from 'react';
import './App.css';
import './styles.css';
import Home from './components/Home.js';
import Knowledge from './components/Knowledge.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import theme from './components/UI/Theme';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Navbar />
          <div style={{ height: '15px' }} />
          <Home />

          <div className="spacer" />

          <Knowledge />

          <div className="spacer" />

          <About />

          <div className="spacer" id="Projects" />
          <Projects />

          <div className="spacer" id="Contact" />
          <Contact />

          <div className="spacer" />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
