import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function MyNavbar() {
  return (
    <Navbar style={{ backgroundColor: "#ee6a59" }} id="navbar">
      <Navbar.Brand className="brand-style text-light">
        <h1 className="logo">
          Party Perfect
          <span>
            <img
              className="brand-image"
              alt="Party hat logo"
              src={process.env.PUBLIC_URL + "/assets/images/hat.png"}
            ></img>
          </span>
        </h1>
      </Navbar.Brand>
    </Navbar>
  );
}

export default MyNavbar;
