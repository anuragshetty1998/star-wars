import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Firstpage/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Highlight from "./Components/Secondpage/Highlight/Highlight";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Highlight} />
      <Footer />
    </div>
  );
}

export default App;
