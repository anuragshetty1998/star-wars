import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import Display from './Display';
import './Details.css';

function Urldata({dataUrl,id}) {
    const [data,setData]=useState({});

    useEffect(()=>{
       ''===dataUrl? console.log():getData(); 
     },[dataUrl])

     const getData=async()=>{
        return  (await axios.get(dataUrl)
         .then(res=>{
            setData(res.data)
         //   console.log('result',res.data)
         }).catch(err=>{
            console.log('error',err)
            })
         )
      }
 
  return (
   <div className="url-detail">
        <div className='heading-div'>
            <h1 className='heading'>{data.name||data.title}</h1>
        </div>
        
       <div className='details-scroll'>
            <Display finalData={data} id={id}/>
       </div>

    </div>
  );
}

export default Urldata;