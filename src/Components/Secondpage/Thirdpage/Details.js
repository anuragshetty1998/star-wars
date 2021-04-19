import React,{ useState,useEffect} from 'react';
import './Details.css';
import {useParams} from "react-router-dom";
import Urldata from './Urldata';


function Details({collUrl,match}) {
  let {params}=match;
  let {id}=params;
  const {id2,id3}=useParams();
  const [dataUrl,setDataUrl]=useState('');
  const [idName,setIdName]=useState(id2);

  useEffect(()=>{
    getDataUrl(); 
    setIdName(id2);
  },[id,id2,id3])

  const getDataUrl=()=>{
    Object.keys(collUrl).length === 0?setIdName(id2):collUrl.map((ele,index)=>{
      return(index===parseInt(idName)?setDataUrl(ele.url):console.log());
    })
  }


  return (
    <div >
        <Urldata dataUrl={dataUrl} id={id}/>
     </div>
  );
}

export default Details;
