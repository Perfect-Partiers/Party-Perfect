import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import LoginCard from "../components/LoginCard";

function Login() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <h1>Please login to get partying!</h1>
      </Row>
      <Row className="justify-content-md-center">
        <LoginCard />
      </Row>
      <Row className="justify-content-md-center mt-4">
        <h5>
          Haven't created an account yet? Create one{" "}
          <Link to="/create-account">here</Link>!
        </h5>
      </Row>
    </Container>
  );
}

export default Login;
