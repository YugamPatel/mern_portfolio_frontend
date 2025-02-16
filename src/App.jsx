import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner/spinner.jsx";
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
      await dispatch(getUserData());
      setTimeout(() => setLoading(false), 2500);
    };
    loadData();
    console.log("User data loaded:", userData);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <motion.dev
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/" element={<Homepage user={userData} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </motion.dev>
      )}
    </>
  );
}

export default App;
