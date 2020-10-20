import React from 'react';
import "./Die.css";


export default function Dice(props) {
   

    return (
       
        <i
          className={`Die fas fa-dice-${props.face} ${props.rolling &&
          "shaking"}`}
         />
       
      );
}
