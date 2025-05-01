// src/admin/sections.js
export const adminSections = [
  {
    key: "hero",
    label: "Hero Section",
    icon: "💥",
    route: "/dashboard/hero", 
  },
  {
    key: "about",
    label: "About Section",
    icon: "ℹ️",
  },
  {
    key: "User",
    label: "Modern About Me",
    icon: "👤",
    route: "/dashboard/modern-about",
  },
  {
    key: "education",
    label: "Education Timeline",
    icon: "🎓",
    route: "/dashboard/education", 
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
