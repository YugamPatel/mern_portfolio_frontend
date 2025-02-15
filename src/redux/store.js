import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./Reducers/heroReducer";
import userReducer from "./Reducers/userReducer" ;

const store = configureStore({
  reducer: {
    hero: heroReducer,
    user: userReducer
  },
});

export default store;
