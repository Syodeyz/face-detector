import './App.css';
import Navigation from '../src/components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300
      }
    }
  }
}

function App() {
  return (
    <div className="App">
     <Particles className="particles" params={particlesOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      
    </div>
  );
}

export default App;
