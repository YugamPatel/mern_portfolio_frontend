/*
 * User Actions
 *
 * Thunk action that fetches the full user profile from the backend.
 * On success the payload is stored in state.user.userData and used
 * throughout the app to hydrate local data files with live API values.
 *
 * Endpoint: GET /api/get-user
 * Expected response shape: { success: true, output: { hero, about, … } }
 */

import client from "../../api/apiClient";

export const getUserData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_REQUEST" });

    const response = await client.get("/api/get-user");

    if (!response.data || !response.data.success) {
      throw new Error(response.data?.message || "Invalid API response");
    }

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: response.data.output,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);

    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response?.data?.message || "Failed to fetch user data",
    });
  }
};
