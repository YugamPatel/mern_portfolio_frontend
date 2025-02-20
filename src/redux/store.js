import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./reducers/heroReducer";
import userReducer from "./reducers/userReducer" ;
import authReducer from "../redux/reducers/authReducer";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
