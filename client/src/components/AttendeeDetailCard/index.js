import React, { useState, useEffect } from "react";
import { Card, Table, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";

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
  tButton: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

function AttendeeDetailCard(props) {
  const [show, setShow] = useState(false);
  const [formObject, setFormObject] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formObject);
    addAttendee(formObject);
  };

  const addAttendee = (attendee) => {
    console.log(attendee);
    console.log(props.partyId);
    API.updateParty(props.partyId, {
      attendees: [
        {
          name: attendee.name,
          email: attendee.email,
        },
      ],
    });
    handleClose();
  };

  const handleDeleteBtn = (event, attendee) => {
    // console.log(id);
    console.log(event.target);
    console.log(attendee);
    API.removePartyItem(props.partyId, {
      attendees: [
        {
          name: attendee.name,
          email: attendee.email,
          _id: attendee._id,
        },
      ],
    });
  };
    
  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title>Attendees</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Remove</th>
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
                  <tr key={attendee._id}>
                    <td>{attendee.name}</td>
                    <td>{attendee.email}</td>
                    <td>
                            <Button
                                style={styles.tButton}
                                value={attendee._id}
                                onClick={(event) => 
                                handleDeleteBtn(event, attendee)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                    </td>
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
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Attendee Name"
                  style={styles.formControl}
                  onChange={handleInputChange}
                  name="name"
                ></Form.Control>
                <Form.Control
                  type="email"
                  placeholder="Enter Attendee Email"
                  style={styles.formControl}
                  onChange={handleInputChange}
                  name="email"
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
