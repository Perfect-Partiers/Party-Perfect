import React, { useState } from "react";
import { Form, Card, Col, Button } from "react-bootstrap";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },
  button: {
    backgroundColor: "#99658a",
  },
};

function PartyCreationCard(props) {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log(formObject)
    props.makeParty(formObject);
    // setFormObject()
    };


  return (
    <Col className="mt-4">
      <Card style={styles.card}>
        <Card.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formGroupPartyName">
              <Form.Label>Party Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter party name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyDate">
              <Form.Label>Date: </Form.Label>
              <Form.Control
                name="date"
                type="date"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyTime">
              <Form.Label>Time: </Form.Label>
              <Form.Control
                name="time"
                type="time"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Enter street address"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                name="zip"
                type="text"
                placeholder="Enter street address"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button
              block
              variant="outline-light"
              style={styles.button}
              type="submit"
            >
              Create Party
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PartyCreationCard;
