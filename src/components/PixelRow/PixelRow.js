import React from 'react';

import Pixel from '../../containers/Pixel/Pixel';
import './PixelRow.css';

const pixelRow = props => {

    let row = [];

    for(let i = 0; i < props.columns; i++){
        row.push(
            <Pixel 
                key={i} 
                color={props.color} 
                clicked={props.clicked} 
                reset={props.reset}/>);
    }

    return(
        <React.Fragment>{row}</React.Fragment>
    );
    
}

export default pixelRow;