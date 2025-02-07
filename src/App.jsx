
import './App.css'
import Hero from './Hero/Hero';
import About from './About/About'
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


const App = () => {

  return (
    <div className='scroll-smooth'>
      <Hero/>
      <About/>
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
