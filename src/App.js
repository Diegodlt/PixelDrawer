import React, { Component } from 'react';

import './App.css';
import PixelRow from './components/PixelRow/PixelRow';

const PIXEL_SIZE = 10;

class App extends Component {

  state = {
    color: "#ffffff",
    columns: 20,
    rows : 20,
    clicked: false,
    reset: false
  }

  changeColor = event => {
    this.setState({
      color: event.target.value,
      reset: false
    });
  }

  // This will allow the Pixel class to get the current color selected
  getColor = () =>{
    return this.state.color;
  }

  addColumn = () =>{
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

  clickedHandler = () => {
    this.setState({clicked: true})
  }

  unClickedHandler = () => {
    this.setState({clicked: false});
  }

  changeInput = (e) =>{
    this.setState({columnValue: e.target.value})
  }

  clearBoard = () =>{
    this.setState({
      color: "#ffffff",
      reset: true
    })
  }

  resetBoard = () =>{
    this.setState({
      color:"#ffffff",
      reset: true,
      columns: 20,
      rows: 20
    });
  }

  render() {
    console.log("[App.js] Render");
    let board = [];

    for(let i = 0; i < this.state.rows; i++){
      board.push(
        <PixelRow 
          columns={this.state.columns} 
          key={i} 
          color={this.state.color}
          reset={this.state.reset}
          clicked={this.state.clicked} />);
    }

    return (
      <div className="App">
        <div className="ControlPanel">
          <div>
            <span className="Controls">Row</span>
            <button className="Controls Add" onClick={this.removeRow}>-</button>
            <button className="Controls Add" onClick={this.addRow}>+</button>
            <span className="Controls">{this.state.rows}</span>
          </div>
          <div>
            <span className="Controls" >Column</span>
            <button className="Controls Add" onClick={this.removeColumn}>-</button>
            <button className="Controls Add" onClick={this.addColumn}>+</button>
            <span className="Controls">{this.state.columns}</span>
          </div>
          <div>
            <button className="Controls" onClick={this.clearBoard}>Clear</button>
            <button className="Controls" onClick={this.resetBoard}>Reset</button>
          </div>
          <input type="color" className="ColorInput" value={this.state.color} onChange={this.changeColor}/>
        </div>
        <div 
          className={"Board"}
          onMouseDown={this.clickedHandler} 
          onMouseUp={this.unClickedHandler}
          onMouseLeave={this.unClickedHandler}
          style={{width: this.state.columns * PIXEL_SIZE, height: this.state.rows * PIXEL_SIZE}}>
          {board}
        </div>
      </div>
    );
  }
}

export default App;
