import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "../components/LoginCard";

const styles = {
  link: {
    color: "#007BFE",
  },
};

function Login() {

  
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center mt-5">
        <Col className="text-center">
          <h1>Why just party if you can Party Perfect?</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <LoginCard />
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col className="text-center" fluid>
          <h5>
            Haven't created an account yet? Create one{" "}
            <Link style={styles.link} to="/create-account">
              here
            </Link>
            !
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
