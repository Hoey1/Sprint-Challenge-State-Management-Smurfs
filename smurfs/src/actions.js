import axios from "axios";
export const SUBMIT_SMURF = "SUBMIT_SMURF";
export const FETCH_VILLAGE = "FETCH_VILLAGE";

export const submitSmurf = (newsmurf) => (dispatch) => {
  dispatch({ type: "POST_SMURF" });
  axios
    .post("http://localhost:3333/smurfs", newsmurf)
    .then((res) => {
      console.log("new smurf has a home", res);
      dispatch({ type: FETCH_VILLAGE });
      axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
          console.log(res.data);
          dispatch({ type: "FETCH_VILLAGE_SUCCESS", payload: res.data });
        })
        .catch((err) => console.log("there was an error with your village"));
    })
    .catch((err) => {
      console.log("Sorry, there's no more room in the village", err);
    });
};

export const fetchVillage = () => (dispatch) => {
  dispatch({ type: FETCH_VILLAGE });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "FETCH_VILLAGE_SUCCESS", payload: res.data });
    })
    .catch((err) => console.log("there was an error with your village"));
};
