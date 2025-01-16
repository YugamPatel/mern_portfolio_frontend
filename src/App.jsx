import Homepage from "./pages/Homepage/Homepage";
import { motion, useScroll } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/404/Page404.jsx";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      {/* <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
