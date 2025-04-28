// src/admin/components/UpdateBox/UpdateBox.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./updateBox.css";

const UpdateBox = ({ section }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (section.route) {
      navigate(section.route);
    } else if (section.updateAction) {
      // for actions like reset
      section.updateAction(dispatch);
    }
  };

  return (
    <div className="update-box" onClick={handleClick}>
      <div className="update-box-icon">{section.icon}</div>
      <div className="update-box-label">{section.label}</div>
    </div>
  );
};

export default UpdateBox;
