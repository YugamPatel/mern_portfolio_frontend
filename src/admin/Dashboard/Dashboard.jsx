import React, { useEffect } from "react";
import { use } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("🚀 Fetching user data...");
  }, []);

  console.log;
  console.log("🚀 Dashboard Rendered, User:", user);

  if (loading) return <p>Loading user data...</p>;

  return (
    <div
      style={{
        padding: "20px",
        height: "100vh",
        width: "100%",
        overflow: "hide",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {user ? <h1>Welcome, {user.username}!</h1> : <p>Error: User not found</p>}
    </div>
  );
};

export default Dashboard;
