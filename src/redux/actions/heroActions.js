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

export const updateHeroData = (hero) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_HERO_REQUEST" });

    const { data } = await client.put(
      "/api/user/hero",
      hero,
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: "UPDATE_HERO_SUCCESS",
      payload: data.output, // updated heroObject
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_HERO_FAILURE",
      payload: error.response?.data?.message || "Failed to update hero data",
    });
  }
};
