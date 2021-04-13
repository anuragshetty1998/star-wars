import React from 'react';
import './Category.css';
import {useState} from 'react';

function Logo({info}) {
    const {name,imgsrc,imghovsrc}=info;
    const [isHov,setIsHov]=useState(false)
    
    const mouseOver=(e)=>{
        setIsHov(true);
      }

    const mouseOut=(e)=>{
        setIsHov(false) ;
      }

    return (
      <div className="">
          <img onMouseOver={mouseOver} onMouseOut={mouseOut} src={isHov?imghovsrc:imgsrc} className="logo-img"></img>
          <p className='logo-name'>{name}</p>
      </div>
    );
  }
  
  export default Logo;