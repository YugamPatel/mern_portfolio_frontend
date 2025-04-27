import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./dashboard.css";
import UpdateBox from "./components/UpdateBox/updateBox";

const Dashboard = () => {
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("🚀 Fetching user data...");
  }, []);

  console.log;
  console.log("🚀 Dashboard Rendered, User:", user);

  if (loading) return <p>Loading user data...</p>;

  return (
    <div id="dashboard">
      <div className="admin-grid-parent">
        <UpdateBox />
      </div>
    </div>
  );
};

export default Dashboard;
