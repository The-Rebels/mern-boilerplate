import { combineReducers } from "redux";
import counterSlice from "./features/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
