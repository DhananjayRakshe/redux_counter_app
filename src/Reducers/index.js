import counter from "./counter";
import text from "./text";
import { combineReducers } from "redux";

const rootReducer = combineReducers({counter,text});

export default rootReducer;