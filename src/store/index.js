import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducers/appReducer";

export default function configureStore(initialState = {}) {
    return createStore(appReducer, initialState, applyMiddleware(thunk));
}