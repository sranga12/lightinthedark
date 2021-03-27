import '../App.css';
import React from 'react';

class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          lights_on: true,
          info: props
        };
    }
    render() {
        return (
            <a-box depth={this.props.depth} height={this.props.height}  width={this.props.width} position={this.props.position} rotation={this.props.rotation} color={this.state.lights_on ? this.props.color : "#000000"}></a-box>
        );
    }

    
  }


export default Book;
