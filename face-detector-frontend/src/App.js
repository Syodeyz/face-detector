import './App.css';
import React from 'react'
import Navigation from '../src/components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import Particles from 'react-particles-js';



/**
* for the animation in the background, thanks to particles.js-react.
*/
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

const initialState = {
  input:'',         
  imageUrl: '',     
  boundingBox: {},  // for the box boundary around the face
  route:'signIn',   // for routing through different components
  isSignedIn: false,
  user:{
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  } 
}

class App extends React.Component{
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
  
  // listener on input for url
  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }
  
  /**
  * changes the route of of the app as per given route-parameter. 
  * @param {string} route 
  */
  onRouteChange = (route) =>{
    if(route === 'signOut'){
      this.setState(initialState);  
    }else if(route === 'home'){
      this.setState({route : 'home'})
      this.setState({isSignedIn:true})
    }else{
      this.setState({route:route});
    }
    // 
  }
  
  /**
  * Gets the response array from api and return the box boundaries
  * @param {array} data 
  * @returns object with boudaries properties; i.e top, right, bottom, left
  */
  calculateBoxBoundaries = (data) => {
    const boxBoundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    
    const top = height * boxBoundaries.top_row;
    const right = width - (width * boxBoundaries.right_col);
    const bottom = height - (height * boxBoundaries.bottom_row);
    const left = width * boxBoundaries.left_col;
    
    return {
      'top': top,
      'right': right,
      'bottom': bottom,
      'left':left
    }
  }
  
  displayBoundingBox = (box) =>{
    this.setState({boundingBox:box})
  }
  
  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input});
      fetch('https://cool-face-detector.herokuapp.com/imageurl', {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          input:this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response){
          fetch('https://cool-face-detector.herokuapp.com/image', {
          method:'put',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            id:this.state.user.id,
          })
        })
          .then(response => response.json())
          .then(entries => {
            this.setState(Object.assign(this.state.user, {entries: entries[0]}));
          })
        } 
      this.displayBoundingBox(this.calculateBoxBoundaries(response))
      
    })
    .catch(err => console.log("error with server " + err));
  }
  
  
  
  render(){
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions}/>
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
      {
        this.state.route === 'home' ? 
        <div className="displayHome">
        <Logo />
        <Rank userName = {this.state.user.name} entries = {this.state.user.entries}/>
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} boundingBox={this.state.boundingBox}/>
        </div>
        :
        (
          this.state.route === 'signIn' ?
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          )
          
          
        }
        
        </div>
        );
      }
      
    }
    
    export default App;
    