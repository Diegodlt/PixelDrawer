import React, { Component } from 'react';

import './App.css';
import PixelRow from './components/PixelRow/PixelRow';

class App extends Component {

  state = {
    color: "white",
    columns: 5,
    rows : 5
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

  addColumn = () =>{
    console.log("ADDCOLUMN");
    let colums = this.state.columns + 1;
    this.setState({columns: colums})
  }

  removeColumn = () =>{
    let colums = this.state.columns - 1;
    this.setState({columns: colums})
  }

  addRow = () =>{
    let rows = this.state.rows + 1;
    this.setState({rows: rows});
  }

  removeRow = () =>{
    let rows = this.state.rows - 1;
    this.setState({rows: rows});
  }

  render() {
    console.log("[App.js] Render");
    let board = [];

    for(let i = 0; i < this.state.rows; i++){
      board.push(<PixelRow columns={this.state.columns} newColor={this.getColor.bind(this)} />);
    }

    return (
      <div className="App">
        <input type="color" className="ColorInput" onChange={this.changeColor}/>
        <p onClick={this.addRow}>Add row</p>
        <p onClick={this.removeRow}>Remove row</p>
        <p onClick={this.addColumn}>Add column</p>
        <p onClick={this.removeColumn}>Remove column</p>
        {/* <PixelRow columns={this.state.columns} newColor={this.getColor.bind(this)} /> */}
        {board}
      </div>
    );
  }
}

export default App;
