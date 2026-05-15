/*
 * User Reducer
 *
 * Manages the remote user profile state. The userData object is
 * the single source of truth for all API-driven content; local
 * data files in each feature serve as fallbacks when the API is
 * unavailable or slow.
 *
 * State shape:
 *   userData — full profile object (null until loaded)
 *   loading  — true while the API request is in-flight
 *   error    — error message string on failure, otherwise null
 */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("GET_USER_REQUEST", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("GET_USER_SUCCESS", (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
    .addCase("GET_USER_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default userReducer;
