import React from 'react';
import './Home.css';
import footer_logo from '../Images/footer_logo.png'


function Footer() {
    return (
      <div className="footer">
          
          <img src={footer_logo}  className='footer-img'/>
          <div className='footer-text1'>
              <ul>
                  <li className='footer-li'>TERMS OF USE </li>
                  <li className='footer-li'>LEGAL NOTICES </li>
                  <li className='footer-li'> PRIVACY POLICY</li>
                  <li className='footer-li'> STAR WARS HELPDESK</li>
                  <li className='footer-li'> STAR WARS AT DISNEY STORE </li>
              </ul>
          </div>

          <div className='footer-text2'>
              <p className='footer-p'>TM & c Lucasfilm Ltd.All Rights Reserved</p>
          </div>
      
      </div>
    );
  }
  
  export default Footer;

