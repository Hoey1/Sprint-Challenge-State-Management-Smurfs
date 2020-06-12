import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardWrapper from "./cardWrapper";
import SmurfForm from "./form";
import { fetchVillage } from "../actions";
const App = (props) => {
  useEffect(() => {
    props.fetchVillage();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <CardWrapper />
    </div>
  );
};

export default connect(null, { fetchVillage })(App);
