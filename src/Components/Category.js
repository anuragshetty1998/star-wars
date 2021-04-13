import React from 'react';
import Logo from './Logo';
import Data from './Data';
import './Category.css';

function Category() {
  

  
    return (
      <div className="category">

        {Data.map((data,index)=>{
          return <Logo key={index} info={data}/>
        })}
      
      </div>
    );
  }
  
  export default Category;
