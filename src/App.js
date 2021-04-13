import React from 'react';
import './App.css';
import Home from './Components/Firstpage/Home';
import Title from './Components/Firstpage/Title';
import Footer from './Components/Firstpage/Footer';
import Highlight from './Components/Secondpage/Highlight';
import { Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Title/>
       <Footer /> 
       <Route exact path='/' component={Home}/>
       <Route exact path='/:id' component={Highlight}/>

    </div>
  );
}

export default App;
