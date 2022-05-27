import React from "react";

const ShowTown = (props) => {
  const town = props.town;
  return (
    <>
      <ul>
        {town.map((value, index) => (
          <li key={value + index} id={value.name}>
            {value.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowTown;
