import React from 'react';
import '../App.css';
import pic from '../fancy.jpg';
import darkpic from '../darkroom.png';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lights_on: true
    };
  }


  render() {
    return (
        <a-scene camera look-controls position="0 1.6 0" light="defaultLightsEnabled: false">
        <a-assets>
          <img id="sky" src={this.state.lights_on ? pic : darkpic}></img>
        </a-assets>
        <a-plane material="side: double; color: #EF2D5E; transparent: true; opacity: 0.5" height="2" width="2" position="2 0 -2" rotation="0 0 0" ></a-plane>
        <a-box depth=".5" height=".1" width="1" position="-5 0 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
        <a-cylinder width="2" height=".5" position="-7 15 -5" rotation="0 70 0 "> </a-cylinder>
        <a-sky src="#sky"></a-sky>
      </a-scene>
    );
  }

  light_switch(){
      var temp = !this.state.lights_on
      this.setState(state =>({
          lights_on: temp
      }));
      
  }
}

export default Room;