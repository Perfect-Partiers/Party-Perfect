import React, { useRef, useState, useEffect } from "react";
import { Form, Card, Col, Button, Alert, Row } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

import { Link, useHistory } from "react-router-dom";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
    width: "900px",
  },
  labelMain: {
    color: "#ffffff",
    fontSize: "20px",
  },
  labelForm: {
    fontSize: "18px",
  },
  button: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
  },
  formControl: {
    width: "80%",
  },
  link: {
    color: "#007BFE",
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
    <div>
      <Col className="mt-4 justify-content-center">
        <Card style={styles.card}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <center>
                <Form.Label
                  className="font-weight-bold mb-2"
                  style={styles.labelMain}
                >
                  Login
                </Form.Label>
              </center>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group as={Row} controlId="formGroupEmail" className="py-2">
                <Form.Label
                  column
                  sm="3"
                  className="font-weight-bold text-right"
                  style={styles.labelForm}
                >
                  Email
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Enter your email"
                    style={styles.formControl}
                    ref={emailRef}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formGroupPassword"
                className="py-2"
              >
                <Form.Label
                  column
                  sm="3"
                  className="font-weight-bold text-right"
                  style={styles.labelForm}
                >
                  Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    style={styles.formControl}
                    ref={passwordRef}
                    required
                  />
                </Col>
              </Form.Group>
            </Form>

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

            <div className="w-100 text-center mt-3">
              <Link style={styles.link} to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default LoginCard;
