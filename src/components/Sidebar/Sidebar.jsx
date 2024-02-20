import "./sidebar.css";
import useSwipe from "./swipe.js";

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
            <li className="nav_item">
              <a href="#homePage" className="noLink">
                <i className="fa-solid fa-house"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#theFinalAboutmePage" className="noLink">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#EducationPage" className="noLink">
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#skillsPage" className="noLink">
                <i className="fa-solid fa-gem"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#projects" className="noLink">
                <i className="fa-solid fa-puzzle-piece"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#homePage" className="noLink">
                <i className="fa-solid fa-message"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copywrite">&copy; 2024-2025</span>
      </div>
    </div>
  );
};

export default Sidebar;
