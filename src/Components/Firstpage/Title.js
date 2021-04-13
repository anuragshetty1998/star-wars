import React from 'react';
import logo from '../Firstpage/Images/logo.png';
import './Home.css';

function Title() {
    return (
      <div className="title">
      <img src={logo}  className='title-img'/>
      </div>
    );
  }
  
  export default Title;