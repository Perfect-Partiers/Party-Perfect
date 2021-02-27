import { Form, Card, Col, Button, Row, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";

import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { auth, generateUserDocument } from "./../../firebase";
import API from "../../utils/API";
import "./style.css";

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
    width: "90%",
  },
  link: {
    color: "#007BFE",
  },
};

function CreateAccountCard() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [displayName, setDisplayName] = useState("");

  const validate = () => {
    if (!firstNameRef.current.value) {
      setFirstNameError("First name cannot be null");
    } else {
      setFirstNameError("");
    }
    if (!lastNameRef.current.value) {
      setLastNameError("Last name cannot be null");
    } else {
      setLastNameError("");
    }
    if (!emailRef.current.value) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
    if (!passwordRef.current.value.length < 6) {
      setPasswordError("Password length should be at least 6 characters");
    } else {
      setPasswordError("");
    }

    if (firstName || lastName || password) {
      this.setState({ firstNameError, lastNameError, passwordError });
      return false;
    }

    return true;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      const displayName = firstNameRef.current.value;
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
      }

      try {
        setError("");
        setLoading(true);

        await signup(
          emailRef.current.value,
          passwordRef.current.value,
          displayName
        );

        history.push("/");
      } catch (error) {
        console.log(error);
        setError("Failed to create an account");
      }
      setLoading(false);
    }
  }

  return (
    <div className="justify-content-center">
      <Col className="mt-5">
        <Card style={styles.card}>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <center>
              {/* <Form onSubmit={handleSubmit}> */}
              <Form>
                <center>
                  <Form.Label
                    className="mb-3 font-weight-bold align-text-center"
                    style={styles.labelMain}
                  >
                    Create Account
                  </Form.Label>
                </center>

                <Form.Group
                  as={Row}
                  controlId="formGroupFirstName"
                  className="py-2"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    First Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      // id="displayName"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      style={styles.formControl}
                      ref={firstNameRef}
                      required
                    />
                    {firstNameError ? (
                      <div
                        style={{
                          fontSize: 20,
                          color: "red",
                        }}
                      >
                        {firstNameError}
                      </div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  controlId="formGroupLastName"
                  className="py-2"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Last Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      style={styles.formControl}
                      ref={lastNameRef}
                      required
                    />
                    {lastNameError ? (
                      <div
                        style={{
                          fontSize: 20,
                          color: "red",
                        }}
                      >
                        {lastNameError}
                      </div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  controlId="formGroupEmail"
                  className="py-2"
                >
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
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      style={styles.formControl}
                      ref={emailRef}
                      required
                    />
                    {emailError ? (
                      <div
                        style={{
                          fontSize: 20,
                          color: "red",
                        }}
                      >
                        {emailError}
                      </div>
                    ) : null}
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
                      name="password"
                      placeholder="Password"
                      style={styles.formControl}
                      ref={passwordRef}
                      required
                    />
                    {passwordError ? (
                      <div
                        style={{
                          fontSize: 20,
                          color: "red",
                        }}
                      >
                        {passwordError}
                      </div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group
                  id="password-confirm"
                  as={Row}
                  controlId="formGroupPasswordConfirm"
                  className="py-2"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Confirm Password
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={styles.formControl}
                      ref={passwordConfirmRef}
                      required
                    />
                  </Col>
                </Form.Group>

                <center className="my-3">
                  <Button
                    onClick={handleSubmit}
                    style={styles.button}
                    className="font-weight-bold hoverButton"
                    variant="primary"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </center>
              </Form>
            </center>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-3 font-weight-bold">
          <span>Already have an account? You can login </span>
          <Link style={styles.link} to="/login">
            here
          </Link>
          !
        </div>
      </Col>
    </div>
  );
}

export default CreateAccountCard;
