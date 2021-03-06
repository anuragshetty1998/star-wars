import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Navbar.css";

const data = ["films", "species", "planets", "people", "starships", "vehicles"];

function Navbar() {
  const { id } = useParams();
  const [selected, setSelected] = useState(id);

  const select = (event) => {
    setSelected(event.target.innerText.toLowerCase());
  };

  return (
    <>
      <nav className="options-nav">
        {data.map((ele, index) => {
          return ele === selected ? (
            <li className="options-sli" key={index}>
              {ele.toUpperCase()}
            </li>
          ) : (
            <Link to={`/${ele}`}>
              <li onClick={select} className="options-li" key={index}>
                {ele.toUpperCase()}
              </li>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export default Navbar;
