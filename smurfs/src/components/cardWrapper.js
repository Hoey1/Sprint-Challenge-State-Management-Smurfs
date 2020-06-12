import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./smurfcard";

const CardWrapper = (props) => {
  return (
    <div className="cardsWrapper">
      {props.smurfs.map((smurf) => {
        return <SmurfCard smurf={smurf} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, {})(CardWrapper);
