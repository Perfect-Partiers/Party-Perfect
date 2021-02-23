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
                                   disabled={
                                        !(
                                             name &&
                                             date &&
                                             time &&
                                             address &&
                                             zip
                                        )
                                   }
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
