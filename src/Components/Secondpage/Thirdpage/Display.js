import React,{useEffect ,useState} from 'react';
import './Display.css';
import Content from './Contents'


function Display({finalData,id}) {
    const contentList=['people','films','starships','vehicles','species','planets'];
    const [select,setSelect]=useState(null);
    const [features,setFeatures]=useState([]);

    useEffect(()=>{
        contentList.map((ele,index)=>{
           return(ele===id?setSelect(index):console.log());
        })

        Content.map((ele,index)=> {
            return(index===select?setFeatures(ele):console.log());
        })
    },[id,select])
    
    
    const disData=()=>{
        return(
        features.map((ele)=>{
            return(<p className='display-line'>
                <b className='display-name'>{ele.slice(0,1).toUpperCase() + ele.slice(1, ele.length)} : </b>{finalData[ele]}
                </p>)
        }))
    }

    return (
      <>
        {disData()}
      </>
    );
  }
  
  export default Display;