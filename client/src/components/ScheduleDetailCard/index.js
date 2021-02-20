import React, {useState} from "react";
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

function ScheduleDetailCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let activitySort = []

  if (props.schedule) {
    activitySort = props.schedule.sort(function(a, b) {
      return Date.parse('1970/01/01 ' + a.time.slice(0, -2) + ' ' + a.time.slice(-2)) - Date.parse('1970/01/01 ' + b.time.slice(0, -2) + ' ' + b.time.slice(-2))
    });
  } else {
    activitySort = []
  }
  
  
  
  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title>Schedule</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          {(!props.schedule) ? (
              <tr>
                <td>Press the add to schedule button to add activities</td>
              </tr>
            ) : (
              activitySort.map((event) => {
                return (
                  <tr key={event.activity}>
                    <td>{event.activity}</td>
                    <td>{event.time}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        <Button href="#" style={styles.button} onClick={handleShow}>Add to Schedule</Button>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="text-center"
        >
          <Modal.Header closeButton style={styles.modalHead}>
            <Modal.Title style={styles.modalTitle}>Add Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.modal} className="font-weight-bold">
            Enter the activity name and time below
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Activity"
                  style={styles.formControl}
                ></Form.Control>
                <Form.Control
                  type="time"
                  placeholder="Enter Time"
                  style={styles.formControl}
                ></Form.Control>
                <Button style={styles.modalButton} type="submit">
                  Add Activity
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default ScheduleDetailCard;
