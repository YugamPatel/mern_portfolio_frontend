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
    <div className="dashboard"
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
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          backgroundColor: "#fff",
        }}
      >
        <h1>Dashboard</h1>
        <p>Welcome, {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        </div>
    </div>
  );
};

export default Dashboard;
