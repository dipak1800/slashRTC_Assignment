import { createStore, applyMiddleware, combineReducers } from "redux";
import { ActivePage_Reducer } from "../Reducers/ActivePage_Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import SideBar_Reducer from "../Reducers/SideBar_Reducer";
const allReducers = combineReducers({ SideBar_Reducer, ActivePage_Reducer });
const GlobalStore = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(logger))
);
export default GlobalStore;
