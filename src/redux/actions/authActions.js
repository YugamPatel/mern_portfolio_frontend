import client from "../../api/apiClient";

export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const response = await client.post("/auth/login", credentials);
    if (response.data.success) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
      navigate("/dashboard");
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: response.data.message });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Failed to log in",
    });
  }
};

export const verifyUser = () => async (dispatch) => {
  try {
    dispatch({ type: "VERIFY_REQUEST" });

    const { data } = await client.get("/auth/verify", {
      withCredentials: true,
    });

    if (data.success) {
      console.log("✅ User Verified:", data.output); // Debugging Log
      dispatch({
        type: "VERIFY_SUCCESS",
        payload: {
          user: data.output, 
          isAuthenticated: true, 
        },
      });
    } else {
      console.log("❌ Verification Failed:", data.message); // Debugging Log
      dispatch({ type: "VERIFY_FAILURE" });
    }
  } catch (error) {
    console.error("❌ Error verifying user:", error); // Debugging Log
    dispatch({ type: "VERIFY_FAILURE" });
  }
};
