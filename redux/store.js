import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {};

export default createStore(reducer, initialState);
