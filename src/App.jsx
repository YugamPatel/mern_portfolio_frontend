import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner/spinner.jsx";
import Page404 from "./pages/404/Page404.jsx";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./components/Spinner/Spinner.jsx";
import { getUserData } from "./redux/actions/userAction.js";
import { useEffect, useState } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  // Fetch user data on app start
  useEffect(() => {
    console.log(userData);
    const loadData = async () => {
      await dispatch(getUserData());
      setLoading(false);
    };
    loadData();
  }, [dispatch]);

  // Show Spinner until both requests are completed
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {loading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        <motion.dev
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
        >
          {/* <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          );
        </motion.dev>
      )}
    </>
  );
}

export default App;
