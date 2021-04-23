import React, { useState } from "react";
import { Route, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Details from "../../Thirdpage/Details/Details";
import Getdata from "../Getdata/Getdata";
import "./Highlight.css";

function Highlight() {
  const { id } = useParams();

  return (
    <div className="highlight">
      <Navbar />
      <Route exact path="/:id">
        <Getdata id={id} />
      </Route>
      <Route path={`/:id/:id2/:id3`}>
        <Details />
      </Route>
    </div>
  );
}

export default Highlight;
