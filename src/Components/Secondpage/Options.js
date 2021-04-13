import React from 'react';
import './Highlight.css';
import { useState,useEffect} from "react";
import {Link, NavLink} from "react-router-dom";

const data=['films','species','planets','peoples','starships','vehicles'];

function Options({name}) {
    const[selected,setSelected]=useState(name.params.id);

    const sel=(eve)=>{
        setSelected(eve.target.innerText.toLowerCase())
    }

    return (
      <div className='options' >
          <nav className='options-nav'>
              {data.map(ele=>{
                  return (ele==selected?
                    <li className='options-li' className='options-sli' key={ele}> {ele.toUpperCase()}</li>:
                    <NavLink to={`/${ele}`}> <li onClick={sel} className='options-li' key={ele}> {ele.toUpperCase()}</li></NavLink>)

              })}

          </nav>
         
      </div>
    );
  }
  
  export default Options;


