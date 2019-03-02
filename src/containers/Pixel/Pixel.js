import React, { Component } from 'react';
import './Pixel.css';

class Pixel extends Component{

    state = {
        color: "white"
    }

    colorChangerHandler = () => {
        let colorSelected = this.props.newColor();
        if(colorSelected === this.state.color){
            return;
        }
        this.setState({color: this.props.newColor()})
    }

    render(){
        console.log("Render")
        return(
            <div 
            className="Pixel" 
            style={{backgroundColor: this.state.color}} 
            onClick={this.colorChangerHandler}></div>
        );
    }
}

export default Pixel;