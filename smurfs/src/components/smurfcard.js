import React from "react";

const SmurfCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.smurf.name} Smurf</h2>
      <p>{props.smurf.age} Years Old</p>
      <p>{props.smurf.height} Tall</p>
    </div>
  );
};

export default SmurfCard;
