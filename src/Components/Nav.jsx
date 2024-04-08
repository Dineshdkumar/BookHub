import React from "react";

function Nav() {

  return (
    
    <>
    
     <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark " data-bs-theme="dark">
  <div className="container-fluid">
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <a className="navbar-brand" href="#">BOOKHUB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Nav;
