import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { verifyUser } from "../redux/actions/authActions";
import Spinner from "./Spinner/Spinner";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!isAuthenticated) {
          await dispatch(verifyUser());
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setLoading(false);
      }
    };
    loadData();
  }, [dispatch, isAuthenticated]);

  if (loading) return <Spinner />;
  console.log("🚀 Authenticated:", isAuthenticated);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;

