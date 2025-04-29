// src/Bootstrap.jsx
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "./redux/actions/userAction.js";
import Spinner from "./components/Spinner/Spinner.jsx";
import App from "./App.jsx";

export default function Bootstrap() {
  const dispatch = useDispatch();
  const [bootLoading, setBootLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const timeout = new Promise((resolve) => setTimeout(resolve, 5000));
      try {
        await Promise.race([dispatch(getUserData()), timeout]);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setTimeout(() => setBootLoading(false), 2500);
      } finally {
        setTimeout(() => setBootLoading(false), 2500);
      }
    };

    loadData();
  }, [dispatch]);

  return bootLoading ? <Spinner /> : <App />;
}
