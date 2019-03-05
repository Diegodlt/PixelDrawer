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

    dragHandler = () => {
        if(this.props.clicked){
            let colorSelected = this.props.newColor();
            if(colorSelected === this.state.color){
                return;
            }
            this.setState({color: this.props.newColor()})
        }
    }

    render(){
        return(
            <div 
            className="Pixel" 
            draggable={false}
            style={{backgroundColor: this.state.color}} 
            onClick={this.colorChangerHandler}
            onMouseEnter={this.dragHandler}></div>
        );
    }
}

export default Pixel;