import React,{ useState} from 'react';
import {Link,useParams} from "react-router-dom";
import './Options.css';

const data=['films','species','planets','people','starships','vehicles'];

function Options() {
    const {id}=useParams()
    const[selected,setSelected]=useState(id);

    const sel=(event)=>{
        setSelected(event.target.innerText.toLowerCase())
    }

    const option=()=>{
      return(data.map((ele,index)=>{
        return (ele===selected?
          <li  className='options-sli' key={index}> {ele.toUpperCase()}</li>:
          <Link style={{ textDecoration: 'none' }} to={`/${ele}`}> 
            <li onClick={sel} className='options-li' key={index}> {ele.toUpperCase()}</li>
          </Link>)
      }))
    }

    return (
      <div className='options' >
          <nav className='options-nav'>
             {option()} 
          </nav>
      </div>
    );
  }
  
  export default Options;