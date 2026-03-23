import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Stats from './components/Stats';
import AyyildizProject from './components/AyyildizProject';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <AyyildizProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
