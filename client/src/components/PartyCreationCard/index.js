import React, { useState } from "react";
import { Form, Card, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },
  button: {
    backgroundColor: "#99658a",
  },
};

function PartyCreationCard() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Col className="mt-4">
      <Card style={styles.card}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formGroupPartyName">
              <Form.Label>Party Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter party name"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyDate">
              <Form.Label>Date: </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyTime">
              <Form.Label>Time: </Form.Label>
              <TimePicker
                showSecond={false}
                className="xxx"
                // onChange={onChange}
                use12Hours
                inputReadOnly
                name="time"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyName">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Enter street address"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyName">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                name="zipCode"
                type="text"
                placeholder="Enter street address"
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
