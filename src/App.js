import React, { Component } from 'react';

import './App.css';
import Pixel from './containers/Pixel/Pixel';

class App extends Component {

  state = {
    color: "white"
  }

  changeColor = event => {
    this.setState({
      color: event.target.value
    });
  }

  // This will allow the Pixel class to get the current color selected
  getColor = () =>{
    return this.state.color;
  }

  render() {
    return (
      <div className="App">
        <input type="color" className="ColorInput" onChange={this.changeColor}/>
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
        <Pixel newColor={this.getColor.bind(this)} />
      </div>
    );
  }
}

export default App;
