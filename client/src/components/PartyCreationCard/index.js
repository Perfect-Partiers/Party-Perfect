import React, { useState } from "react";
import { Form, Card, Col, Button, Row } from "react-bootstrap";
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
  control: {
    width: "575px",
  },
  button: {
    backgroundColor: "#99658a",
    borderColor: "#99658A",
    width: "200px",
  },
};

function PartyCreationCard(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "time") {
      setTime(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "zip") {
      setZip(value);
    }
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);

    props.makeParty(formObject);
    // setFormObject()
  }

  return (
    <div className="justify-content-center">
      <Col className="mt-5">
        <Card style={styles.card}>
          <Card.Body className="justify-content-center">
            <Form onSubmit={handleFormSubmit}>
              <center>
                <Form.Label
                  className="mb-3 font-weight-bold align-text-center "
                  style={styles.labelMain}
                >
                  Create Party
                </Form.Label>

                <Form.Group
                  as={Row}
                  controlId="formGroupPartyName"
                  className="py-2"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Party Name:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      style={styles.control}
                      className="float-left"
                      name="name"
                      type="text"
                      placeholder="Enter party name"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formGroupPartyName"
                  className="py-2"
                  controlId="formGroupPartyDate"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Date:{" "}
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      style={styles.control}
                      className="float-left"
                      name="date"
                      type="date"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formGroupPartyName"
                  className="py-2"
                  controlId="formGroupPartyTime"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Time:{" "}
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      style={styles.control}
                      className="float-left"
                      name="time"
                      type="time"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formGroupPartyName"
                  className="py-2"
                  controlId="formGroupPartyAddress"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Street Address:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      style={styles.control}
                      className="float-left"
                      name="address"
                      type="text"
                      placeholder="Enter street address"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formGroupPartyName"
                  className="py-2"
                  controlId="formGroupPartyZip"
                >
                  <Form.Label
                    column
                    sm="3"
                    className="font-weight-bold text-right"
                    style={styles.labelForm}
                  >
                    Zip Code:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      style={styles.control}
                      className="float-left"
                      name="zip"
                      type="text"
                      placeholder="Enter street address"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Form.Group>

                <Button
                  className="hoverButton font-weight-bold"
                  block
                  style={styles.button}
                  type="submit"
                  disabled={!(name && date && time && address && zip)}
                >
                  Create Party
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default PartyCreationCard;
