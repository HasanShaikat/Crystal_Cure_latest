
import './App.css'
import Hero from './Hero/Hero';
import About from './About/About'
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Faq from './Faq/Faq';
import ExtraLine from './Extra-Line/ExtraLine';
import ServiceCard from './ServiceCard/ServiceCard';

const App = () => {

  return (
    <div className='scroll-smooth'>
      <Hero/>
      <ExtraLine />
      <About/>
      <ExtraLine />
      {/* <Service />
      <ExtraLine /> */}
      <ServiceCard/>
      <ExtraLine/>
      <Gallery />
      <ExtraLine />
      
      <Faq />
      <ExtraLine />
      <Contact />
      <ExtraLine />
      <Footer />
    </div>
  );
}

export default App;
