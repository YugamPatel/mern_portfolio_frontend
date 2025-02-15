import client from "../../api/apiClient";

export const getHeroData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_HERO_REQUEST" });

    const { data } = await client.get("/api/user/hero");

    dispatch({
      type: "GET_HERO_SUCCESS",
      payload: data.output, // API returns { output: heroObject }
    });
  } catch (error) {
    console.error("Error fetching hero data:", error);

    dispatch({
      type: "GET_HERO_FAILURE",
      payload: error.response?.data?.message || "Failed to fetch hero data",
    });
  }
};
