import { GETUSER } from "./Actiontype";

import axios from "axios";

export const Getusers = () => async (dispatch) => {
  try {
    await axios.get("/user/find").then((res) => {
      dispatch({ type: GETUSER, payload: res.data });
      // dispatch({ type: GETUSER, payload: res.data.all_users }); to bring the users without the other informations
    });
  } catch (error) {
    console.log("Get users error: ", error);
  }
};
export const Createuser = (data) => async (dispatch) => {
  try {
    await axios.post("/user/create",data).then((res) => {
      dispatch(Getusers());
      
    });
  } catch (error) {
    console.log("Create user error: ", error);
  }
};