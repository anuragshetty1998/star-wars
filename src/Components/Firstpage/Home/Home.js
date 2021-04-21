import React from 'react';
import {Link} from "react-router-dom";
import Icon from '../Icon/Icon';
import Data from '../Data';
import './Home.css';

function Home() {
    return (
      <div className="home">
         {Data.map((element,index)=>{
            return (
              <Link to={`/${element.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <Icon key={index} info={element}/>
              </Link>
            )
          })}
      </div>
    );
  }
  
  export default Home;
