import React from "react";
import { Form, Card, Col, Button, Row } from "react-bootstrap";

// To Do: Email validation to confirm that email is not already in use. 
// To Do: Password verification to ensure it matches & meets certain criteria

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },
  button: {
    backgroundColor: "#99658A",
    borderColor: "#99658A"
  }
};

function CreateAccountCard() {

  return (
    <Col className="mt-4">
      <Card style={styles.card}>
        <Card.Body>
          <Form>
            <center><Form.Label className="font-weight-bold">Create Account</Form.Label></center>

            <Form.Group as={Row} controlId="formGroupFirstName">
              <Form.Label column sm="2">First Name</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Jane" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGroupLastName">
              <Form.Label column sm="2">Last Name</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Doe" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGroupEmail">
              <Form.Label column sm="2">Email</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="example@email.com" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGroupPassword">
              <Form.Label column sm="2">Password</Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGroupPasswordConfirm">
              <Form.Label column sm="2">Confirm Password</Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

          </Form>

          <center><Button style={styles.button} className="font-weight-bold" variant="primary" type="submit">
          Create Account
          </Button></center>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default CreateAccountCard;
