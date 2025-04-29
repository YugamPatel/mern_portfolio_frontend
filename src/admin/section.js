// src/admin/sections.js
export const adminSections = [
  {
    key: "User",
    label: "Upadate User",
    icon: "👤",
    route: "/dashboard/user",
  },
  {
    key: "hero",
    label: "Hero Section",
    icon: "💥",
    actionType: "UPDATE_HOME",
    route: "/dashboard/hero", 
    updateAction: (dispatch, payload) => dispatch(updateHome(payload)), // import updateHome from your actions
  },
  {
    key: "about",
    label: "About Section",
    icon: "ℹ️",
    actionType: "UPDATE_ABOUT",
    updateAction: (dispatch, payload) => dispatch(updateAbout(payload)),
  },
  {
    key: "education",
    label: "Education Timeline",
    icon: "🎓",
    route: "/dashboard/education", // if you prefer a separate page
  },
  {
    key: "work",
    label: "Work Timeline",
    icon: "💼",
    route: "/dashboard/work",
  },
  {
    key: "skills",
    label: "Skills",
    icon: "🛠️",
    route: "/dashboard/skills",
  },
  {
    key: "projects",
    label: "Projects",
    icon: "🚀",
    route: "/dashboard/projects",
  },
  {
    key: "contact",
    label: "Contact Info",
    icon: "✉️",
    route: "/dashboard/contact",
  },
  {
    key: "logout",
    label: "Log Out",
    icon: "🔓",
    actionType: "LOGOUT",
    updateAction: (dispatch) => dispatch(logout()),
  },
];
