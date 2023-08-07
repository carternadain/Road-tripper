
import Navbar from './components/Nav/Navbar';
import Hero from './components/Hero/Hero';
import Trip from './components/Trip/Trip'; // Make sure this path is correct
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trip />
      <Map />
      <Footer />
    </div>
  );
};

export default App;