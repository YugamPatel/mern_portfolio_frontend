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
