// // src/admin/User/UserAdmin.jsx
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateLoginDetails } from "../../redux/actions/userAction.js"; 
// import Spinner from "../../components/Spinner/Spinner.jsx";
// import "./UserAdmin.css";

// const UserAdmin = () => {
//   const dispatch = useDispatch();
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const { loading: updateLoading, message, error } = useSelector(
//     (state) => state.update
//   );

//   // Local form state
//   const [form, setForm] = useState({ userName: "", password: "" });

//   // On mount, populate with existing username
//   useEffect(() => {
//     if (user) {
//       setForm({ userName: user.username, password: "" });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateLoginDetails(form.userName, form.password));
//   };

//   // Show spinner while loading either auth or update
//   if (authLoading || updateLoading) return <Spinner />;

//   return (
//     <div className="user-admin">
//       <h2>Update Login Details</h2>
//       {message && <p className="success">{message}</p>}
//       {error && <p className="error">{error}</p>}

//       <form onSubmit={handleSubmit} className="user-form">
//         <label>
//           Username
//           <input
//             type="text"
//             name="userName"
//             value={form.userName}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           New Password
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default UserAdmin;
