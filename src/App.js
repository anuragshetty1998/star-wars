import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Home from './Components/Firstpage/Home';
import Title from './Components/Firstpage/Title';
import Footer from './Components/Firstpage/Footer';
import Highlight from './Components/Secondpage/Highlight';


function App() {
  return (
    <div className="App">
       <Title/>
       <Route exact path='/' component={Home}/>
       <Route  path='/:id' component={Highlight}/>
       <Footer /> 
    </div>
  );
}

export default App;
