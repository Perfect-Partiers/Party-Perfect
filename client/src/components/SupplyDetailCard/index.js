import React, {useState} from "react"
import {Card, Table, Button, ToggleButton, ToggleButtonGroup, Modal, Form} from "react-bootstrap";
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
  toggleButton: {
    backgroundColor: "#EE6A59",
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

function SupplyDetailCard(props) {
  console.log(props.supplies)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title>Supplies</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <th>Completed</th>
              <th>Supply</th>
            </tr>
          </thead>
          <tbody>
          {(!props.supplies) ? (
              <tr>
                <td>Press the add supply button to add supplies</td>
              </tr>
            ) : (
              props.supplies.map((supplyItem) => {
                return (
                    <tr>
                    <td>
                      <ToggleButtonGroup type="checkbox" className="mb-2">
                        <ToggleButton
                          value={1}
                          style={styles.toggleButton}
                          variant="outline-dark"
                        >
                          Have It!
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </td>
                    <td>{supplyItem.supply} </td>
                  </tr>
                );
              })
            )}
                      
          </tbody>
        </Table>
                <Button href="#" style={styles.button} onClick={handleShow}>Add Supply</Button>
                <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="text-center"
        >
          <Modal.Header closeButton style={styles.modalHead}>
            <Modal.Title style={styles.modalTitle}>Add Supplies</Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.modal} className="font-weight-bold">
            Enter the supply below
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Supply"
                  style={styles.formControl}
                ></Form.Control>
                <Button style={styles.modalButton} type="submit">
                  Add Supply
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default SupplyDetailCard;
