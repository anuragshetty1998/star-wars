import React,{ useState,useEffect} from 'react';
import './Details.css';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Display from '../Display/Display'

function Details({data}) {
  const {id,id2,id3}=useParams();
  const [finalData,setFinalData]=useState({});

  useEffect(()=>{
    getUrl(); 
  },[id3])

  const getUrl=()=>{
    Object.keys(data).length === 0?console.log():data.map((element,index)=>{
      return(index===parseInt(id2)?getData(element.url):null);
    })
  }
  
  const getData=async(url)=>{
    await axios.get(url).then(res=>{
        setFinalData(res.data)
    })
}

  return (
    <div className="url-detail">
        <div className='heading-div'>
            <h1 className='heading'>{finalData.name||finalData.title}</h1>
        </div>
        
       <div className='details-scroll'>
            <Display finalData={finalData} id={id}/>
       </div>

    </div>
  );
}

export default Details;
