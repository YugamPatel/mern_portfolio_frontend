/*
 * Sidebar — Fixed Navigation
 *
 * A vertical icon-only nav that stays fixed on the left edge of the
 * viewport. On mobile (< 635 px) it slides off-screen and can be
 * revealed with a right-edge swipe gesture via the useSwipe hook.
 *
 * Nav targets match the id attributes on each page section so that
 * clicking an icon scrolls the page smoothly to that section.
 */

import "./sidebar.css";
import useSwipe from "../../hooks/useSwipe";
import { motion } from "framer-motion";

const Sidebar = () => {
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

  /* Navigation items — each entry maps to a section id on the page */
  const navItems = [
    { href: "#homePage",            icon: "fa-solid fa-house" },
    { href: "#theFinalAboutmePage", icon: "fa-solid fa-user" },
    { href: "#EducationPage",       icon: "fa-solid fa-graduation-cap" },
    { href: "#skillsPage",          icon: "fa-solid fa-gem" },
    { href: "#projects",            icon: "fa-solid fa-puzzle-piece" },
    { href: "#contact",             icon: "fa-solid fa-message" },
  ];

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
            {navItems.map(({ href, icon }) => (
              <motion.li
                key={href}
                className="nav_item"
                whileHover={{ scale: 1.2, borderRadius: "5px" }}
                whileTap={{ scale: 0.8 }}
              >
                <a href={href} className="noLink">
                  <i className={icon}></i>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copywrite">&copy; 2025-2026</span>
      </div>
    </div>
  );
};

export default Sidebar;
