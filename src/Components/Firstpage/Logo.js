import React from 'react';
import {useState} from 'react';
import './Logo.css';

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
      <div >
          <img onMouseOver={mouseOver} onMouseOut={mouseOut} src={isHov?imghovsrc:imgsrc} alt='Icon' className="logo-img"></img>
          <p className='logo-name'>{name}</p>
      </div>
    );
  }
  
  export default Logo;