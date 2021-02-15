import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar
      className="justify-content-center"
      style={{ backgroundColor: "#ee6a59" }}
    >
      <Container className="container text-light">
        <h1>Party Perfect</h1>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
