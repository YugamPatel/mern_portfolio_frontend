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
              <i class="fa-solid fa-house"></i>
            </li>

            <li className="nav_item">
              <i class="fa-solid fa-user"></i>
            </li>

            <li className="nav_item">
              <i class="fa-solid fa-graduation-cap"></i>
            </li>

            <li className="nav_item">
              <i class="fa-solid fa-medal"></i>
            </li>

            <li className="nav_item">
              <i class="fa-solid fa-puzzle-piece"></i>
            </li>

            <li className="nav_item">
              <i class="fa-solid fa-message"></i>
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
