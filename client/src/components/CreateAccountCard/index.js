import React from "react";
import { Form, Card, Col, Button, Row } from "react-bootstrap";

// To Do: Email validation to confirm that email is not already in use.
// To Do: Password verification to ensure it matches & meets certain criteria

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
};

function CreateAccountCard() {
  return (
    <div className="justify-content-center">
      <Col className="mt-5">
        <Card style={styles.card}>
          <Card.Body>
            <center>
              <Form>
                <center>
                  <Form.Label
                    className="mb-3 font-weight-bold"
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
                    className="font-weight-bold ml-auto"
                    style={styles.labelForm}
                  >
                    First Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      placeholder="Jane"
                      style={styles.formControl}
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
                    className="font-weight-bold"
                    style={styles.labelForm}
                  >
                    Last Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      placeholder="Doe"
                      style={styles.formControl}
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
                    className="font-weight-bold"
                    style={styles.labelForm}
                  >
                    Email
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      placeholder="example@email.com"
                      style={styles.formControl}
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
                    className="font-weight-bold"
                    style={styles.labelForm}
                  >
                    Password
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={styles.formControl}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  controlId="formGroupPasswordConfirm"
                  className="py-2"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold"
                    style={styles.labelForm}
                  >
                    Confirm Password
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={styles.formControl}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </center>

            <center className="mt-5">
              <Button
                style={styles.button}
                className="font-weight-bold"
                variant="primary"
                type="submit"
              >
                Create Account
              </Button>
            </center>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default CreateAccountCard;
