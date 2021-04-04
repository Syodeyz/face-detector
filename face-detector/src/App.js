import './App.css';
import React from 'react'
import Navigation from '../src/components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import SignIn from './components/signIn/SignIn';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

/**
 * Api Key
 * */
const app = new Clarifai.App({
  apiKey:'b11e90c19d67426e86ce298ea968f69e'
});

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
      imageUrl: '',
      boundingBox: {}
    }
  }

onInputChange = (event) => {
  this.setState({input:event.target.value});
}

calculateBoxBoundaries = (data) => {
  //console.log("what happenend???");
  //console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
  const boxBoundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
  //boundingBox.top_row + "% " + boundingBox.right_col + "% " + boundingBox.bottom_row + "% " + boundingBox.left_col
  //console.log(boxBoundaries);
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  console.log("width "+ width, "height "+ height);
  const top = height * boxBoundaries.top_row;
  const right = width - (width * boxBoundaries.right_col);
  const bottom = height - (height * boxBoundaries.bottom_row);
  const left = width * boxBoundaries.left_col;
  
  console.log("top " + top, "right " + right, "bottom " + bottom, "left " + left);
  
  return {
    'top': top,
    'right': right,
    'bottom': bottom,
    'left':left
  }
  //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
}

displayBoundingBox = (box) =>{
  console.log(box);
  this.setState({boundingBox:box})
}

onButtonSubmit = () =>{
  this.setState({imageUrl:this.state.input});
  app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
  .then(response => this.displayBoundingBox(this.calculateBoxBoundaries(response))
  .catch(err => console.log("error with server " + err))
  );
}
  render(){
    return (
      <div className="App">
       <Particles className="particles" params={particlesOptions}/>
        <Navigation />
        <SignIn />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} boundingBox={this.state.boundingBox}/>
      </div>
    );
  }
  
}

export default App;
