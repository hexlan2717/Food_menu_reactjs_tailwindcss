
import Burger from './components/Burger';
import Chinese from './components/Chinese';
import ContactDevloper from './components/ContactDevloper';
import ContactUs from './components/ContactUs';
import Coolers from './components/Coolers';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import GarlicBread from './components/GarlicBread';
import HealthyBowls from './components/HealthyBowls';
import Maggi from './components/Maggi';
import Menu from './components/Menu';
import Momos from './components/Momos';
import Navabr from './components/Navabr';
import Pasta from './components/Pasta';
import Pizza from './components/Pizza';
import Sandwiches from './components/Sandwiches';
import Sides from './components/Sides';
import Wraps from './components/Wraps';

function App() {
  return (
   <div className="pb-10">
      <Navabr />

      <Menu />

      <Burger/>  

      <Sandwiches/>

      <Pasta />

      <Wraps/>

      <GarlicBread />
      
     <Chinese />

      <Sides />

      <Momos />

      <Maggi />

      <HealthyBowls />

      <Coolers />

      <Drinks />

      <Desserts/>

      <Pizza />

      <ContactUs />

      <ContactDevloper />
   </div>
  );
}

export default App;
