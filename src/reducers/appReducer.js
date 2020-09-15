import { combineReducers } from "redux";
import userReducer from "../store/requests/requestsReducer";

const appReducer = combineReducers({ userReducer, });

export default appReducer;
