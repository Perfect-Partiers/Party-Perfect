import React, { useState, useEffect } from "react";
import { Card, Table, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const styles = {
  SASDetail: {
    backgroundColor: "#8dc6bf",
  },
  button: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
    width: "200px",
    height: "45px",
  },
  modalButton: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "20px",
  },
  modalHead: {
    backgroundColor: "#ee6a59",
  },
  modalTitle: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  modal: {
    backgroundColor: "#FFFFF0",
  },
  formControl: {
    width: "300px",
    margin: "auto",
    marginTop: "20px",
  },
};

function AttendeeDetailCard(props) {
  // const [attendeeList, setAttendeeList] = setState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newAttendee, setNewAttendee] = useState({})
  
  
  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title>Attendees</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {!props.attendees ? (
              <tr>
                <td>Press the add attendee button to add attendees</td>
              </tr>
            ) : (
              props.attendees.map((attendee) => {
                return (
                  <tr key={attendee.email}>
                    <td>{attendee.name}</td>
                    <td>{attendee.email}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        <Button href="#" style={styles.button} onClick={handleShow}>
          Add Attendee
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="text-center"
        >
          <Modal.Header closeButton style={styles.modalHead}>
            <Modal.Title style={styles.modalTitle}>Add Attendee</Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.modal} className="font-weight-bold">
            Enter the attendee's name and email below
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Attendee Name"
                  style={styles.formControl}
                ></Form.Control>
                <Form.Control
                  type="email"
                  placeholder="Enter Attendee Email"
                  style={styles.formControl}
                ></Form.Control>
                <Button style={styles.modalButton} type="submit">
                  Add Attendee
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default AttendeeDetailCard;
