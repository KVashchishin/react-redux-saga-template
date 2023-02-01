import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import main from "./main/reducers";
import other from "./other/reducers";

export default combineReducers({
  main,
  other,
  routing: routerReducer,
});
