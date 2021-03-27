import '../App.css';
import React from 'react';

class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          lights_on: this.props.lights,
          info: props
        };
    }
    render() {
        return (
            <a-box depth={this.props.depth} height={this.props.height}  width={this.props.width} position={this.props.position} rotation={this.props.rotation} color={this.props.lights ? this.props.color : "#211E1F"}></a-box>
        );
    }

  }


export default Book;
