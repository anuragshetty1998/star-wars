import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Display from "../Display/Display";
import "./Details.css";

function Details() {
  const { id, id2, id3 } = useParams();
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    getUrl();
  }, [id3]);

  const getUrl = () => {
    const url = `http://swapi.dev/api/${id}/${id2}/`;
    getData(url);
  };

  const getData = async (url) => {
    await axios.get(url).then((res) => {
      setFinalData(res.data);
    });
  };

  return (
    <div className="url-detail">
      <div className="heading-div">
        <h1 className="heading">{finalData.name || finalData.title}</h1>
      </div>

      <div className="details-scroll">
        <Display finalData={finalData} id={id} />
      </div>
    </div>
  );
}

export default Details;
