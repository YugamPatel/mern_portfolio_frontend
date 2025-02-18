import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./reducers/heroReducer";
import userReducer from "./reducers/userReducer" ;

const store = configureStore({
  reducer: {
    hero: heroReducer,
    user: userReducer
  },
});

export default store;
