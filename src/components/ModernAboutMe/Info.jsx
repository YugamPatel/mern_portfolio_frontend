import React from "react";
import "./info.css";
import Subinfo from "./Subinfo";
const Info = ({infoData}) => {
  return (
    <pre>
      {infoData.map((item, index) => (
          <Subinfo key={index} variable={item.var} character={item.char} string={item.str}></Subinfo>
        ))}
      <br />
    </pre>
  );
};

export default Info;
