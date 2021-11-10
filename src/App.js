import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './styles/App.scss';

//Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import InfoModule from './components/InfoModule';
import NewsletterModule from './components/NewsletterModule';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Content />
      <InfoModule />
      <NewsletterModule />
      <Footer />
    </div>
  );
}

export default App;
