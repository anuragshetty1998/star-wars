import React,{ useState} from 'react';
import {Route} from "react-router-dom";
import './Highlight.css';
import Options from './Options';
import Merge from './Merge';
import Details from './Thirdpage/Details';

function Highlight({match}) {
  const [collUrl,setCollUrl]=useState({});
  
  const getUrl=(collName)=>{
    setCollUrl(collName);
  }

    return (
      <div className='highlight' >
        <Options />
        <Route exact path='/:id' >  <Merge getUrl={getUrl} match={match}/> </Route>
        <Route  path={`/${match.params.id}/:id2/:id3`} > <Details collUrl={collUrl} match={match} /> </Route>
        
      </div>
    );
  }
  
  export default Highlight;