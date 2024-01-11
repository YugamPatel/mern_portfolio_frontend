import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div class="logo">
        <h1>Y.</h1>
      </div>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#homePage" className="noLink">
                <i class="fa-solid fa-house"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#theFinalAboutmePage" className="noLink">
                <i class="fa-solid fa-user"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#homePage" className="noLink">
                <i class="fa-solid fa-graduation-cap"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#homePage" className="noLink">
                <i class="fa-solid fa-medal"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#homePage" className="noLink">
                {" "}
                <i class="fa-solid fa-puzzle-piece"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#homePage" className="noLink">
                <i class="fa-solid fa-message"></i>
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
