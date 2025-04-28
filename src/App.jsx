import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner.jsx";
import Page404 from "./pages/404/Page404.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./redux/actions/userAction.js";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  // Fetch user data on app start
  useEffect(() => {
    const loadData = async () => {
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
            <Route path="/" element={<Homepage user={userData} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </motion.div>
      )}
    </>
  );
}

export default App;
