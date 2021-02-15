import React, { useRef, useState, useEffect } from "react";
import { Form, Card, Col, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

import { Link, useHistory } from "react-router-dom";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },
  button: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
  },
};

function LoginCard() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);

      setError("");
      setLoading(true);
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser]);
  return (
    <Col className="mt-4">
      <Card style={styles.card}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <center>
              <Form.Label className="font-weight-bold">Login</Form.Label>
            </center>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formGroupEmail" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                required
              />
            </Form.Group>

            <center>
              <Button
                style={styles.button}
                className="font-weight-bold"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </center>
          </Form>

          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default LoginCard;
