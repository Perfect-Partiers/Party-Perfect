import React, { useState } from "react";
import { Form, Card, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
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
              <Form.Control type="text" placeholder="Enter party name" />
            </Form.Group>
            <Form.Group controlId="formGroupPartyDate">
              <Form.Label>Date: </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
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
              />
            </Form.Group>
            <Form.Group controlId="formGroupPartyName">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PartyCreationCard;
