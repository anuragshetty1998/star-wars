import React from 'react';
import './Highlight.css';
import Options from './Options';
import List from './List';



function Highlight({match}) {
    return (
      <div className='highlight' >
          <Options name={match}/>
          <List selName={match}/>
         
      </div>
    );
  }
  
  export default Highlight;