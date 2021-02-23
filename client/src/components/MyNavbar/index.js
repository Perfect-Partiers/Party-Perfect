import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

function MyNavbar() {
  const location = useLocation();
  const { currentUser, logout } = useAuth();

  return (
    <React.Fragment>
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
            <Link
              to="/login"
              className="button font-weight-bold"
              onClick={logout}
            >
              Logout
            </Link>
          )}
        </div>
      </Navbar>
      <div className="mt-3 ml-4">
        {location.pathname === "/home" || location.pathname === "/"
          ? ""
          : currentUser && (
              <Link to="/" className="font-weight-bold text-dark">
                <FontAwesomeIcon icon={faAngleDoubleLeft} /> Back to Home
              </Link>
            )}
      </div>
    </React.Fragment>
  );
}

export default MyNavbar;
