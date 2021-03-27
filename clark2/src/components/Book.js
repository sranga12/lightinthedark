import '../App.css';
import React from 'react';

var list = ["https://www.google.com"]
class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          lights_on: this.props.lights,
          info: props,
          url: list[0]
        };
    }

    componentWillUnmount(){

    }
    render() {
        return (
            <a-box onClick={this.go_to} depth={this.state.info.depth} height={this.state.info.height}  width={this.state.info.width} position={this.state.info.position} rotation={this.state.info.rotation} color={this.props.lights ? this.state.info.color : "#262120"}></a-box>
        );
    }
    go_to = this.go_to.bind(this);

    go_to(){
      console.log("weewoo")
      window.location.href = this.state.url;
    }
  }


export default Book;
