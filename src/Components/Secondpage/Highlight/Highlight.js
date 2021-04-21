import React,{useState} from 'react';
import {Route,useParams} from "react-router-dom";
import './Highlight.css';
import Navbar from '../Navbar/Navbar';
import Details from '../../Thirdpage/Details/Details';
import Getdata from '../Getdata/Getdata';

function Highlight() {
  const [colldata,setCollData]=useState({});
  const {id}=useParams();
  
  const getCollectedData=(data)=>{
    setCollData(data);
  }

  return (
    <div className='highlight' >
      <Navbar />
      <Route exact path='/:id' >  <Getdata getCollectedData={getCollectedData} id={id}/> </Route>
      <Route  path={`/:id/:id2/:id3`} > <Details data={colldata}/> </Route>
    </div>
  );
}
  
export default Highlight;