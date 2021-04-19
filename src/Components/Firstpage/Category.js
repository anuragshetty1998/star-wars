import React from 'react';
import {Link} from "react-router-dom";
import Logo from './Logo';
import Data from './Data';
import './Category.css';

function Category() {
    return (
      <div className="category">
         {Data.map((data,index)=>{
            return (
            <Link style={{ textDecoration: 'none' }} to={`/${data.name.toLowerCase()}`}>
              <Logo key={index} info={data}/>
            </Link>
           )
          })}
      </div>
    );
  }
  
  export default Category;
