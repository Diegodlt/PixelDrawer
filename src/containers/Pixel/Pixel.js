import React, { Component } from 'react';
import './Pixel.css';

class Pixel extends Component{

    state = {
        pixelColor: "white",
        selectedColor: this.props.color
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.color === this.state.pixelColor){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.color === this.props.color){
            return;
        }

        if(this.props.reset){
            this.setState({pixelColor: "white"})
        }
    }

    colorChangerHandler = () => {
        let colorSelected = this.props.color;
        if(colorSelected === this.state.pixelColor){
            return;
        }
        this.setState({pixelColor: colorSelected});
    }

    dragHandler = () => {
        if(this.props.clicked){
            let colorSelected = this.props.color;
            if(colorSelected === this.state.pixelColor){
                return;
            }
            this.setState({pixelColor: colorSelected});
        }
    }

    render(){
        console.log("[Pixel.js] Render");
        return(
            <div 
            className="Pixel" 
            style={{backgroundColor: this.state.pixelColor}} 
            onMouseDown={this.colorChangerHandler}
            onMouseEnter={this.dragHandler}></div>
        );
    }
}

export default Pixel;