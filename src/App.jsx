import Homepage from "./pages/Homepage/Homepage";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Page404 from "./pages/404/Page404.jsx";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./admin/Dashboard/Dashboard.jsx";
import HeroAdmin from "./admin/SubPages/HeroAdmin/HeroAdmin.jsx";

function App() {
  const { userData } = useSelector((state) => state.user);

  return (
    <>
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
            <Route path="/dashboard/hero" element={<HeroAdmin />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
