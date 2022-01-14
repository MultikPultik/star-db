import React from "react";

import "./error-content.css";
import err from "./fail-1.1s-200px.png";

const ErrorContent = () => {
  return (
    <div className="card-body text-center">
      <img style={{ width: "200px" }} src={err}></img>
      <h4 style={{color: 'tomato'}}>Что то пошло не так</h4>
    </div>
  );
};

export default ErrorContent;
