import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner/spinner.jsx";
import Page404 from "./pages/404/Page404.jsx";

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // Simulate resource fetching time
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 200);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

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
