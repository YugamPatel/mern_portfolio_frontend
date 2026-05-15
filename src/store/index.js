/*
 * Redux Store
 *
 * Combines all feature reducers into a single store. Import this
 * in main.jsx and wrap the app with <Provider store={store}>.
 *
 * Slices:
 *   hero  — hero section data fetched from the API
 *   user  — full user profile data fetched from the API
 */

import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./reducers/heroReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    user: userReducer,
  },
});

export default store;
