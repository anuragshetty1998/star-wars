import React from 'react';
import Title from './Title';
import Footer from './Footer';
import Category from './Category';
import './Home.css';
import footer_logo from '../Images/footer_logo.png'


function Home() {
    return (
      <div className='home' >
         <Title/>
         <Footer /> 
         <Category/>
         
      </div>
    );
  }
  
  export default Home;