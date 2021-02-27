import { Form, Card, Col, Button, Row, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";

import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { auth, generateUserDocument } from "../../firebase";
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
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [displayName, setDisplayName] = useState("");

     async function handleSubmit(e) {
          e.preventDefault();

          const displayName = firstNameRef.current.value;
          if (passwordRef.current.value !== passwordConfirmRef.current.value) {
               return setError("password do not match");
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

     return (
          <div className="justify-content-center">
               <Col className="mt-5">
                    <Card style={styles.card}>
                         <Card.Body>
                              {error && <Alert variant="danger">{error}</Alert>}
                              <center>
                                   <Form onSubmit={handleSubmit}>
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
                                                       // value={displayName}
                                                       placeholder="Jane"
                                                       style={
                                                            styles.formControl
                                                       }
                                                       ref={firstNameRef}
                                                  />
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
                                                       placeholder="Doe"
                                                       style={
                                                            styles.formControl
                                                       }
                                                       ref={lastNameRef}
                                                  />
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
                                                       // id="email"
                                                       type="email"
                                                       name="email"
                                                       placeholder="example@email.com"
                                                       style={
                                                            styles.formControl
                                                       }
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
                                                       name="password"
                                                       placeholder="Password"
                                                       style={
                                                            styles.formControl
                                                       }
                                                       ref={passwordRef}
                                                       required
                                                  />
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
                                                       style={
                                                            styles.formControl
                                                       }
                                                       ref={passwordConfirmRef}
                                                       required
                                                  />
                                             </Col>
                                        </Form.Group>

                                        <center className="my-3">
                                             <Button
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
