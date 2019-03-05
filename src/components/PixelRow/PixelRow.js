import React from 'react';

import Pixel from '../../containers/Pixel/Pixel';
import './PixelRow.css';

const pixelRow = props => {

    let row = [];

    for(let i = 0; i < props.columns; i++){
        row.push(<Pixel key={i} newColor={props.newColor} clicked={props.clicked}/>);
    }

    return(
        <div 
            draggable={false}
            className={"PixelRow"}>{row}</div>
    );
    
}

export default pixelRow;