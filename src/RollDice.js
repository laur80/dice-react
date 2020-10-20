import React, { useState } from 'react';
import Die from "./Die";
import "./RollDice.css";



export default function RollDice() {

    const [state, setState]= useState({ die1: "one", die2: "one", rolling: false })
    const sides= ["one", "two", "three", "four", "five", "six"];

    
    function roll() {
        //pick 2 new rolls
        const newDie1 = sides[
          Math.floor(Math.random() * sides.length)
        ];

        const newDie2 = sides[
            Math.floor(Math.random() * sides.length)
          ];
          
      
         setState({ die1: newDie1, die2: newDie2, rolling: true });
          


          setTimeout(() => {
            setState({die1: newDie1, die2: newDie2,rolling: false });
          }, 1300);
    }

    return (
        <div className='RollDice'>
          <div className='RollDice-container'>
            <Die face={state.die1} rolling={state.rolling} />
            <Die face={state.die2} rolling={state.rolling} />
          </div>
          <button onClick={roll} 
          disabled={state.rolling}
          >
            {state.rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      );
}
