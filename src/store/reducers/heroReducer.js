/*
 * Hero Reducer
 *
 * Manages hero-section-specific state fetched via getHeroData().
 * Kept separate from userReducer so the hero can be refreshed
 * without triggering a full profile reload.
 *
 * State shape:
 *   heroData — hero content object (empty object until loaded)
 *   loading  — true while the API request is in-flight
 *   error    — error message string on failure, otherwise null
 */

import { createReducer } from "@reduxjs/toolkit";

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
