import React from "react";
import { Form, Card, Col, Button } from "react-bootstrap";

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
  return (
    <Col className="mt-4">
      <Card style={styles.card}>
        <Card.Body>
          <Form>
            <center>
              <Form.Label className="font-weight-bold">Login</Form.Label>
            </center>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
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
  );
}

export default LoginCard;
