import React from "react";

import './row.css'

const Row = ({ left, right }) => {
  return (
    <div className="row align-items-start">
      <div className="col-6">{left}</div>
      <div className="col-6">{right}</div>
    </div>
  );
};

export default Row;