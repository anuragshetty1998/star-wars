import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import List from '../List/List';
import './Getdata.css';

function Getdata({id,getCollectedData}) {
    const [collectData,setCollectData]=useState([]);
    const [nextUrl,setNextUrl]=useState();
    const [previousUrl,setPreviousUrl]=useState();
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        getPresentUrl(); 
    },[id]);

    const getPresentUrl=()=>{
        let url=`http://swapi.dev/api/${id}/`
        getData(url)
    }

    const getData=async(url)=>{
        setLoading(true);
        await axios.get(url).then(res=>{
            setLoading(false);
            setCollectData(res.data.results)
            setNextUrl(res.data.next)
            setPreviousUrl(res.data.previous)
            getCollectedData(res.data.results)
        })
    }
        
    const onNext=()=>{
        getData(nextUrl);
    }

    const onPrevious=()=>{
        getData(previousUrl);
    }

    if(loading){
        return (<h2 className='loading'>Loading... Please Wait</h2>)
    } 
    
    return (
        <>     
        <List id={id} collName={collectData}/>
        <div className='button-state' >
            {previousUrl?<Button previous={previousUrl} clicked={onPrevious} text='PREVIOUS'/>:null} 
            {nextUrl?<Button previous={previousUrl} clicked={onNext} text='NEXT'/>:null}
        </div>   
        </>
    );
  }
  
  export default Getdata;