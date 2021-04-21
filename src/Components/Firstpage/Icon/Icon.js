import React,{useState} from 'react';
import './Icon.css';

function Icon({info}) {
    const {name,imgsrc,imghovsrc}=info;
    const [isHover,setIsHover]=useState(false);
    
    const mouseOver=()=>{
        setIsHover(true);
      }

    const mouseOut=()=>{
        setIsHover(false);
      }

    return (
      < >
          <img onMouseOver={mouseOver} onMouseOut={mouseOut} src={isHover?imghovsrc:imgsrc} alt='Icon' className="logo-img"></img>
          <p className='logo-name'>{name}</p>
      </>
    );
  }
  
  export default Icon;