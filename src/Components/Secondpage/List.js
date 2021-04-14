import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import './List.css';


function List({selName}) {
        let {params}=selName
        let {id}=params;

        const [collData,setCollData]=useState({});
        const[collName,setCollName]=useState([])
        
        // const [isdata,setIsdata]=useState(true);
        //  let [count,setCount]=useState(1);

        useEffect(()=>{
            getData();
        },[selName])

        const getData=async ()=>{
            return  (await axios.get(`http://swapi.dev/api/${id}/?page=1`).
            then(res=>{
                setCollData(res.data);
                setCollName(res.data.results);
             })) 
        }


    return (
      <div className='list' >
          <nav className='list-nav'>
           {collName.map((ele)=>{
               
               return(<li className='list-li' key={ele.title||ele.name} >{ele.title||ele.name}</li>)
           })} 
           </nav>
        {console.log(id)}
      </div>
    );
  }
  
  export default List;