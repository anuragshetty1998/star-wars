import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import './Merge.css';
import List from './List';
import Button from './Button';

function Merge({match,getUrl}) {
        let {params}=match
        let {id}=params;

        const [collName,setCollName]=useState([]);
        const [idState,setIdState]=useState(id)

       const [nextUrl,setNextUrl]=useState();
        const [previousUrl,setPreviousUrl]=useState();
        const [presentUrl,setPresentUrl]=useState(`http://swapi.dev/api/${id}/?page=1`);

        useEffect(()=>{
            // setPresentUrl(`http://swapi.dev/api/${id}/?page=1`)
             getData(); 
        },[presentUrl,id,nextUrl])

        const getData=async ()=>{
            return  (await axios.get(presentUrl)
            .then(res=>{
                setCollName(res.data.results);
                setNextUrl(res.data.next)
                setPreviousUrl(res.data.previous)
                id===idState?console.log():setPresentUrl(`http://swapi.dev/api/${id}/?page=1`);
                setIdState(id);
                getUrl(collName);
             }).catch(err=>{
                console.log('error',err)
                })) 
        } 

        const onNext=()=>{
            setPresentUrl(nextUrl)
        }

        const onPrevious=()=>{
            setPresentUrl(previousUrl)
        }


        return (
            <div className='merge' >
                <List id={id} collName={collName}/>
                <div className='button-state' >
                {previousUrl?<Button previous={previousUrl} clicked={onPrevious} text='PREVIOUS'/>:null} 
                 {nextUrl?<Button previous={previousUrl} clicked={onNext} text='NEXT'/>:null}
                </div>
                
            </div>
          );
  }
  
  export default Merge;