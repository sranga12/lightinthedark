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

        {/*light switch -- kitchen*/}
        <a-plane material="side: double; color: #EBE1DF; transparent: true; opacity: 0.5" height="0.15" width="0.4"
          position="2.05 1.1 -1" rotation="0 -130 0" ></a-plane>
        {/*light switch -- bedroom*/}
        <a-plane material="side: double; color: #EBE1DF; transparent: true; opacity: 0.5" height="1" width="1.75"
          position="18.3 -2.65 24" rotation="0 -290 0" ></a-plane>

        {/*black -- on tv stand*/}
        <a-box depth=".5" height=".1" width="1" position="9.7 -4 1.5" rotation="4 8 0" color="#141413"></a-box>
        {/*maroon -- on bar/table thing in kitchen*/}
        <a-box depth=".5" height=".1" width="1" position="0.75 0 -9" rotation="0 30 0" color="#820938"></a-box>
        {/*purple -- leaning against wall next to microwave */}
        <a-box depth=".5" height=".1" width="2.5" position="28 -1.75 -28" rotation="4 8 -120" color="#500D78"></a-box>
        {/*blue -- on little black box trunk thingy near front door*/}
        <a-box depth="1" height=".2" width="2" position="25 -5 23" rotation="4 20 0" color="#2A298A"></a-box>
        {/*ugly brown/orange color -- under foot of bed*/}
        <a-box  depth=".75" height=".2" width="1.25" position="-6.5 -10.5 16" rotation="20 20 0" color="#8A4904"></a-box>
        {/*cream -- behind curtain on windowsill*/}
        <a-box material="side: double; color: #141413; transparent: true; opacity: 0.9" depth=".5" height=".1" width="1"
          position="-8 0.2 -1" rotation="4 -130 0" color="#E6E0DC"></a-box>
        {/*peach -- on white ikea bedside table*/}
        <a-box depth=".7" height=".1" width="1.3" position="8 -5 24" rotation="0 0 0" color="#FFC5AD"></a-box>

        {/*fire alarm -- lights above kitchen bar table thing    #C9C5C1     #DBD3D0 */}
        <a-cylinder width="2" height=".5" position="9 15 -13.5" rotation="0 70 0 " color="#C4BDB9"> </a-cylinder>
        
        {/*change a-box to a-circle.  a-box is for testing*/}
        <a-circle class="blink" light="type: hemisphere; color: #C4BDB9" radius="0.05"
          position="5.5 10 -8.5" rotation="90 0 0 " color="#D91C07" metalness="0.5"
          animation="property: components.material.material.opacity; from: 0.4; to: 1; loop: true">
        </a-circle>

        <a-sky src="#sky"></a-sky>
        {/*test line <h2 class="blink">BLINK TEST</h2> */}
      </a-scene>
    );
  }

  light_switch() {
    var temp = !this.state.lights_on
    this.setState(state => ({
      lights_on: temp
    }));

  }
}

export default Room;