import React from 'react';
import './Button.css';

function Button({clicked,text,previous}) {

    return (
      <div  >
        <button  className={ previous===null?'dataLeft':'dataBtn' } onClick={clicked} >{text}</button>
      </div>
    );
  }
  
  export default Button;



