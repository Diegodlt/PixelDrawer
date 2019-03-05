import React, { Component } from 'react';

import './App.css';
import PixelRow from './components/PixelRow/PixelRow';

const PIXEL_SIZE = 10;

class App extends Component {

  state = {
    color: "white",
    columns: 50,
    rows : 50,
    clicked: false
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
    // console.log("ADDCOLUMN");
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

  render() {
    let board = [];

    for(let i = 0; i < this.state.rows; i++){
      board.push(
        <PixelRow 
          columns={this.state.columns} 
          key={i} 
          newColor={this.getColor.bind(this)}
          clicked={this.state.clicked} />);
    }

    return (
      <div className="App">
        <input type="color" className="ColorInput" onChange={this.changeColor}/>
        <div>
          <span className="Controls">Row</span>
          <span className="Controls" onClick={this.addRow}>Add row</span>
          <span className="Controls" onClick={this.removeRow}>Remove row</span>
        </div>
        <div>
          <span className="Controls" >Column</span>
          <span className="Controls" onClick={this.addColumn}>Add column</span>
          <span className="Controls" onClick={this.removeColumn}>Remove column</span>
        </div>
        <div 
          className={"Board"}
          draggable={false}
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
