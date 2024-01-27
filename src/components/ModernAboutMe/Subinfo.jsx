import React from "react";

const Subinfo = ({variable , character , string }) => {
  return (
    <>
      <span className="variable">{variable} </span>
      <span className="character">{character} </span>
      <span className="string">"{string}" </span>
      <br />
    </>
  );
};

export default Subinfo;
