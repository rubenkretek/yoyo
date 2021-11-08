import './App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import InfoModule from './components/InfoModule';
import NewsletterModule from './components/NewsletterModule';
import Footer from './components/Footer';

function App() {
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
