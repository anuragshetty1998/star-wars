import React from 'react';
import './List.css';
import {Link} from "react-router-dom";

function List({collName,id}) {
  
    return (
      < >
          <nav className='list-nav'>
           {collName.map((element,index)=>{
               return(
                <Link to={`/${id}/${index}/${element.title||element.name}`}  style={{ textDecoration: 'none' }}>
                <li className='list-li' key={index} >{element.title||element.name}</li>
                </Link>)
           })} 
           </nav>
      </>
    );
  }
  
  export default List;

 