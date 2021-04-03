import './App.css';
import React from 'react'
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

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }

onInputChange = (event) => {
  console.log(event);
}

onButtonSubmit = () =>{
  console.log("click");
}
  render(){
    return (
      <div className="App">
       <Particles className="particles" params={particlesOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
      </div>
    );
  }
  
}

export default App;
