import React from "react";
import './Loader.css'

const Loader = () => {
  return (
    <div className="flex Loader"> 
      <div className="spinner-border" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="LoadingTitle">
      <h2 >Loading....</h2>
      </div>
    </div>
  );
};

export default Loader;
