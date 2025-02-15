import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    heroData: {},
    loading: false,
    error: null,
};

const heroReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("GET_HERO_REQUEST", (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase("GET_HERO_SUCCESS", (state, action) => {
            state.loading = false;
            state.heroData = action.payload;
        })
        .addCase("GET_HERO_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default heroReducer;