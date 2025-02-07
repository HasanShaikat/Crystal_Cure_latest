
import './App.css'
import Hero from './Hero/Hero';
import About from './About/About'
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Faq from './Faq/Faq';
import ExtraLine from './Extra-Line/ExtraLine';

const App = () => {

  return (
    <div className='scroll-smooth'>
      <Hero/>
      <ExtraLine />
      <About/>
      <ExtraLine />
      <Service />
      <ExtraLine />
      <Faq />
      <ExtraLine />
      <Contact />
      <ExtraLine />
      <Gallery />
      <ExtraLine />
      <Footer />
    </div>
  );
}

export default App;
