import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function MyNavbar() {
  const { currentUser, logout } = useAuth();

  return (
    <Navbar
      className="justify-content-center"
      style={{ backgroundColor: "#ee6a59" }}
      id="navbar"
    >
      <Navbar.Brand className="justify-content-center">
        <h1 className="logo text-white">
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
      <div className="logout">
        {currentUser && (
          <Button className="button font-weight-bold" onClick={logout}>
            Logout
          </Button>
        )}
      </div>
    </Navbar>
  );
}

export default MyNavbar;
