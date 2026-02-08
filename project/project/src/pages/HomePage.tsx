import Hero from '../components/Hero';
import Capabilities from '../components/Capabilities';
import EnergyTransition from '../components/EnergyTransition';
import News from '../components/News';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Capabilities />
      <EnergyTransition />
      <News />
    </div>
  );
};

export default HomePage;
