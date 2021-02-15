import React from "react";
import { Form, Card, Col, Button, Row } from "react-bootstrap";

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

function LoginCard() {
  return (
    <div>
      <Col className="mt-4 justify-content-center">
        <Card style={styles.card}>
          <Card.Body>
            <Form>
              <center>
                <Form.Label
                  className="font-weight-bold mb-2"
                  style={styles.labelMain}
                >
                  Login
                </Form.Label>
              </center>

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
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
