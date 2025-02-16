import client from "../../api/apiClient";

export const getUserData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_REQUEST" }); // Start loading

    const response = await client.get("/api/get-user");

    if (!response.data || !response.data.success) {
      throw new Error(response.data.message || "Invalid API response");
    }

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: response.data.output, // Assuming API returns { data: userObject }
    });
  } catch (error) {
    console.error("Error fetching user data:", error);

    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response?.data?.message || "Failed to fetch user data",
    });
  }
};
