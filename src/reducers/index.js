import { combineReducers } from "redux-immutable";
import counter from "./counter";
import vendor from "./vendor";

export default combineReducers({
  counter,
  vendor
});
