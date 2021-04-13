import React from 'react';
import './Highlight.css';
import Options from './Options';


function Highlight({match}) {
    return (
      <div className='highlight' >
          <Options name={match}/>
         
      </div>
    );
  }
  
  export default Highlight;