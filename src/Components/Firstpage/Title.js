import React from 'react';
import logo from '../Firstpage/Images/logo.png';
import './Home.css';

function Title() {
    return (
      <div className="title">
        <img src={logo} alt='Star Wars' className='title-img'/>
      </div>
    );
  }
  
  export default Title;