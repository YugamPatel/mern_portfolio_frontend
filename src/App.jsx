import Homepage from "./pages/Homepage/Homepage";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Homepage></Homepage>
    </>
  );
}

export default App;
