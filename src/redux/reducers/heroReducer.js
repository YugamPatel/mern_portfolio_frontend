import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  heroData: {},       // holds hero section
  loading: false, // true during fetch or update
  error: null,    // any error message
  message: null,  // success message after update
};

const heroReducer = createReducer(initialState, (builder) => {
  builder
    // ─── FETCH HERO ──────────────────────────────────────────────
    .addCase("GET_HERO_REQUEST", (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    })
    .addCase("GET_HERO_SUCCESS", (state, action) => {
      state.loading = false;
      state.heroData = action.payload;
    })
    .addCase("GET_HERO_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // ─── UPDATE HERO ─────────────────────────────────────────────
    .addCase("UPDATE_HERO_REQUEST", (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    })
    .addCase("UPDATE_HERO_SUCCESS", (state, action) => {
      state.loading = false;
      state.heroData = action.payload;
      state.message = "Hero updated successfully";
    })
    .addCase("UPDATE_HERO_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default heroReducer;
