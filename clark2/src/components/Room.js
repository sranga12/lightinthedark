import React from 'react';
import Book from "./Book"
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
    var color = this.state.lights_on? "#C4BEB9":"#D91C07";
      return (<div>
        <div className="overlay"></div>
        <a-scene cursor="rayOrigin: mouse" camera look-controls position="0 1.6 0" light="type: none">
      <a-assets>
        <img id="sky" src={pic}></img>
      </a-assets>
      <a-assets>
        <img id="dark" src={darkpic}></img>
      </a-assets>

      {/*light switch -- kitchen*/}
      <a-plane onClick={this.light_switch} material="side: double; color: #EBE1DF; transparent: true; opacity: 0" height="0.15" width="0.4"
        position="2.05 1.1 -1" rotation="0 -130 0" ></a-plane>
      {/*light switch -- bedroom*/}
      <a-plane onClick={this.light_switch} material="side: double; color: #EBE1DF; transparent: true; opacity: 0" height="1" width="1.75"
        position="18.3 -2.65 24" rotation="0 -290 0" ></a-plane>

      {/*red -- on tv stand*/}
      <Book lights={this.state.lights_on} depth=".5" height=".1" width="1" position="9.7 -4 1.5" rotation="4 8 0" color="#96140e"></Book>
      {/*maroon -- on bar/table thing in kitchen*/}
      <Book lights={this.state.lights_on} depth=".5" height=".1" width="1" position="0.75 0 -9" rotation="0 30 0" color="#820938"></Book>
      {/*purple -- leaning against wall next to microwave */}
      <Book lights={this.state.lights_on} depth=".5" height=".1" width="2.5" position="28 -1.75 -28" rotation="4 8 -120" color="#500D78"></Book>
      {/*blue -- on little black box trunk thingy near front door*/}
      <Book lights={this.state.lights_on} depth="1" height=".2" width="2" position="25 -5 23" rotation="4 20 0" color="#2E0B70"></Book>
      {/*ugly brown/orange color -- under foot of bed*/}
      <Book lights={this.state.lights_on} depth=".75" height=".2" width="1.25" position="-6.5 -10.5 16" rotation="20 20 0" color="#8A4904"></Book>
      {/*teal -- on the couch*/}
      <Book lights={this.state.lights_on} depth=".5" height=".1" width="1" position="-6 -2.2 0" rotation="4 -130 10" color="#25cfaf"></Book>
      {/*peach -- on white ikea bedside table*/}
      <Book lights={this.state.lights_on} depth=".7" height=".1" width="1.3" position="8 -5 24" rotation="0 0 0" color="#FFC5AD"></Book>

      {/*fire alarm -- lights above kitchen bar table thing    #C9C5C1     #DBD3D0 */}
      <a-cylinder width="2" height=".5" position="9 15 -13.5" rotation="0 70 0 " color={this.state.lights_on ? "#C4BDB9": "#403a36"}> </a-cylinder>

      {/*change a-box to a-circle.  a-box is for testing */}
      <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06"
          position="5.5 10 -8.5" rotation="90 0 0" color={color} animation="property: material.opacity;  loop: true; dur: 1000">
      </a-circle>

      {/*oxymoron --- -..- -.-- -- --- .-. --- -. */}
      <a-sky src={this.state.lights_on? "#sky" :"#dark"}></a-sky>
      {/*test line <h2 class="blink">BLINK TEST</h2> */}
    </a-scene>
        </div>
  );
  }
  light_switch = this.light_switch.bind(this);

  light_switch() {
    var temp = !this.state.lights_on;
    console.log("Lights turning off? "+temp);
    this.setState(state => ({
      lights_on: temp
    }));
    // if(temp){
    //   window.location.reload(false);
    // }
  }
}

export default Room;