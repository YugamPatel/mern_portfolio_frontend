/*
 * App — Root Component
 *
 * Boots the application by:
 *   1. Dispatching getUserData() to fetch the user profile from the API.
 *   2. Racing the fetch against a 5-second timeout so slow/dead backends
 *      don't block the page indefinitely — local data files are the fallback.
 *   3. Showing the Spinner while loading, then fading in the route tree.
 *
 * Routes:
 *   /   → HomePage  (full portfolio)
 *   *   → NotFoundPage (404)
 */

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import HomePage      from "./pages/HomePage/HomePage";
import NotFoundPage  from "./pages/NotFoundPage/NotFoundPage";
import Spinner       from "./shared/components/Spinner/Spinner.jsx";
import { getUserData } from "./store/actions/userActions.js";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      /* Give the API a maximum of 5 s before falling back to local data */
      const timeout = new Promise((resolve) => setTimeout(resolve, 5000));
      try {
        await Promise.race([dispatch(getUserData()), timeout]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/"  element={<HomePage user={userData} />} />
            <Route path="*"  element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      )}
    </>
  );
}

export default App;
