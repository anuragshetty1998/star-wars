import React, { useEffect, useState } from "react";
import Content from "../Contents";
import "./Display.css";

function Display({ finalData, id }) {
  const category = [
    "people",
    "films",
    "starships",
    "vehicles",
    "species",
    "planets",
  ];
  const [select, setSelect] = useState(null);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    category.map((element, index) => {
      return element === id ? setSelect(index) : "none";
    });

    Content.map((element, index) => {
      return index === select ? setFeatures(element) : "none";
    });
  }, [select]);

  return (
    <>
      {features.map((element) => {
        return (
          <p className="display-line">
            <b className="display-name">
              {element.slice(0, 1).toUpperCase() +
                element.slice(1, element.length)}
            </b>
            {finalData[element]}
          </p>
        );
      })}
    </>
  );
}

export default Display;
