import React, { useState } from "react";
import { connect } from "react-redux";
import { submitSmurf } from "../actions";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewSmurf({
      ...newSmurf,
      [name]: [value],
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitSmurf({
      ...newSmurf,
      height: newSmurf.height + "cm",
    });
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <form>
      <h3>Create your own Smurf for the Village/Le Pays Maudit!</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newSmurf.name}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        value={newSmurf.age}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="height in cm"
        name="height"
        value={newSmurf.height}
        onChange={onInputChange}
      />
      <button onClick={onSubmit}>Add Smurf!</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { submitSmurf })(SmurfForm);
