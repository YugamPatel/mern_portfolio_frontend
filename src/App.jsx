import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Spinner from "./components/Spinner/Spinner.jsx";
import Page404 from "./pages/404/Page404.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./redux/actions/userAction.js";
import UserAdmin from "./admin/SubPages/UserAdmin/UserAdmin.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./admin/Dashboard/Dashboard.jsx";

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
        setTimeout(() => setLoading(false), 2500);
      } finally {
        setTimeout(() => setLoading(false), 2500);
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
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/" element={<Homepage user={userData} />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/user" element={<UserAdmin />} />
            </Route>

            <Route path="*" element={<Page404 />} />
          </Routes>
        </motion.div>
      )}
    </>
  );
}

export default App;
