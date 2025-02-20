import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  message: null,
  error: null,
  isAuthenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LOGIN_REQUEST", (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    })

    .addCase("LOGIN_SUCCESS", (state, action) => {
      state.loading = false;
      state.user = action.payload.output;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    })

    .addCase("LOGIN_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("VERIFY_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("VERIFY_SUCCESS", (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isAuthenticated = action.payload.isAuthenticated;
    })
    .addCase("VERIFY_FAILURE", (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    })
    .addCase("LOGOUT", (state) => {
      state.user = null;
      state.message = null;
      state.isAuthenticated = false;
    });
});

export default authReducer;
