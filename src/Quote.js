import React from "react";

import homerBrain from './homerBrain.svg';
import './styles.css';

const Quote = ({handleClick,working}) => (
  <figure className='Quote'>
    <button onClick={handleClick}>Click</button>
    <br/>
    {  working ? <div><p>Work</p> <img
      src={homerBrain}
      alt="Homer Simpson brain"
    /></div>:<div><p>Peace</p>
  <img
      src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      alt="Homer Simpson"
    /></div>
    }
    
  </figure>
);

export default Quote;