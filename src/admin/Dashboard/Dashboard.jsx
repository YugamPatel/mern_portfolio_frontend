import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./dashboard.css";
import UpdateBox from "./components/UpdateBox/updateBox";
import { adminSections } from "../section";
import Spinner from "../../components/Spinner/Spinner";

const Dashboard = () => {
  const doTest = () => {
    const { user, loading } = useSelector((state) => state.auth);
    console.log("🚀 Dashboard Rendered, User:", user);
    return loading;
  };
  const loading = doTest();

  if (loading) return <Spinner />;
  
  return (
    <div id="dashboard">
      <div className="admin-grid-parent">
        {adminSections.map((sec) => (
          <UpdateBox key={sec.key} section={sec} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
