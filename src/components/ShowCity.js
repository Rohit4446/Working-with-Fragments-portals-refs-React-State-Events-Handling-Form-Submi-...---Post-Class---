import React, { useState } from "react";
import ShowTown from "./ShowTown";

const ShowCity = (props) => {
  const [state, setState] = useState(false);

  const city = props.city;
  return (
    <>
      <ul>
        {city.map((value, index) => (
          <li
            key={value + index}
            id={value.name}
            onClick={(e) => {
              if (e.target.id === value.name) {
                setState(!state);
              }
            }}
          >
            {value.name}
            {state && state ? <ShowTown town={value.towns} /> : ""}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowCity;
