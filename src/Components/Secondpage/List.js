import React from 'react';
import './List.css';
import {Link} from "react-router-dom";


function List({collName,id}) {
  
    return (
      <div className='list' >
          <nav className='list-nav'>
           {collName.map((ele,index)=>{
               return(
                <Link style={{ textDecoration: 'none' }} to={`/${id}/${index}/${ele.title||ele.name}`}>
                <li className='list-li' key={index} >{ele.title||ele.name}</li>
                </Link>)
           })} 
           </nav>
      </div>
    );
  }
  
  export default List;

 