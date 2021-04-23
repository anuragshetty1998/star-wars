import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

function List({ collName, id }) {
  return (
    <>
      <nav className="list-nav">
        {collName.map((element) => {
          const name = element.title || element.name;
          const elementId = element.url.match(/[0-9]+/);
          return (
            <Link to={`/${id}/${elementId[0]}/${name}`}>
              <li className="list-li" key={elementId[0]}>
                {name}
              </li>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export default List;
