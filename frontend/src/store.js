import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: import.meta.env.PROD,
});

export default store;
