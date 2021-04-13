import React from 'react';
import Logo from './Logo';
import Data from './Data';
import './Category.css';
import {Link} from "react-router-dom";

function Category() {
  

  
    return (
      <div className="category">

        {Data.map((data,index)=>{
          return (
            <Link to={`/${data.name.toLowerCase()}`}>
              <Logo key={index} info={data}/>
            </Link>
          )
        })}
      
      </div>
    );
  }
  
  export default Category;
