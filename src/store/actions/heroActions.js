/*
 * Hero Actions
 *
 * Thunk action that fetches only the hero section data.
 * Kept separate from userActions in case the hero section
 * needs to be refreshed independently of the full profile.
 *
 * Endpoint: GET /api/user/hero
 * Expected response shape: { output: { …heroFields } }
 */

import client from "../../api/apiClient";

export const getHeroData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_HERO_REQUEST" });

    const { data } = await client.get("/api/user/hero");

    dispatch({
      type: "GET_HERO_SUCCESS",
      payload: data.output,
    });
  } catch (error) {
    console.error("Error fetching hero data:", error);

    dispatch({
      type: "GET_HERO_FAILURE",
      payload: error.response?.data?.message || "Failed to fetch hero data",
    });
  }
};
