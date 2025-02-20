import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import useSwipe from "./swipe.js";
import { motion } from "framer-motion";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate("/login");
  };

  const {
    sidebarVisible,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    toggleSidebar,
  } = useSwipe();

  const sidebarStyle = {
    transform: sidebarVisible ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.35s ease-out",
  };

  return (
    <div
      className={sidebarVisible ? "sideBar active" : "sideBar"}
      style={sidebarStyle}
      onClick={toggleSidebar}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="logo">
        <h1>Y.</h1>
      </div>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <motion.li
              className="nav_item"
              whileHover={{ scale: 1.2, borderRadius: "5px" }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#homePage" className="noLink">
                <i className="fa-solid fa-house"></i>
              </a>
            </motion.li>

            <motion.li
              className="nav_item"
              whileHover={{ scale: 1.2, borderRadius: "5px" }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#theFinalAboutmePage" className="noLink">
                <i className="fa-solid fa-user"></i>
              </a>
            </motion.li>

            <motion.li
              className="nav_item"
              whileHover={{ scale: 1.2, borderRadius: "5px" }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#EducationPage" className="noLink">
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </motion.li>

            <motion.li
              className="nav_item"
              whileHover={{ scale: 1.2, borderRadius: "5px" }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#skillsPage" className="noLink">
                <i className="fa-solid fa-gem"></i>
              </a>
            </motion.li>

            <motion.li
              className="nav_item"
              whileHover={{ scale: 1.2, borderRadius: "5px" }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#projects" className="noLink">
                <i className="fa-solid fa-puzzle-piece"></i>
              </a>
            </motion.li>

            <motion.li
              className="nav_item"
              whileHover={{ scale: 1.2, borderRadius: "5px" }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#contact" className="noLink">
                <i className="fa-solid fa-message"></i>
              </a>
            </motion.li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright" onDoubleClick={handleDoubleClick}>
          &copy; 2025-2026
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
