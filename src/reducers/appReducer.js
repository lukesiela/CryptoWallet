import { combineReducers } from "redux";
import userReducer from "../store/users/usersReducer";

const appReducer = combineReducers({ userReducer, });

export default appReducer;
