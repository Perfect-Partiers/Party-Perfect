import React, { useState } from "react";
import {
  Card,
  Table,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Form,
} from "react-bootstrap";
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
  tButton: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

function SupplyDetailCard(props) {
  console.log(props.supplies);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formObject);
    addSupply(formObject);
  };

  const addSupply = (supply) => {
    console.log(supply);
    console.log(props.partyId);
    API.updateParty(props.partyId, {
      supplies: [
        {
          supply: supply.supply,
        },
      ],
    });
    handleClose();
  };

  const handleDeleteBtn = (event, id, supply) => {
    console.log(id);
    console.log(event.target);
    console.log(supply);
    
  };

  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title>Supplies</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <th>Supply</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {!props.supplies ? (
              <tr>
                <td>Press the add supply button to add supplies</td>
              </tr>
            ) : (
              props.supplies.map((supplyItem) => {
                return (
                  <tr key={supplyItem._id}>
                    <td>{supplyItem.supply} </td>
                    <td>
                      <Button
                        style={styles.tButton}
                        value={supplyItem._id}
                        onClick={(event) =>
                          handleDeleteBtn(
                            event,
                            supplyItem._id,
                            supplyItem.supply
                          )
                        }
                      >
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
          Add Supply
        </Button>
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
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="supply"
                  placeholder="Enter Supply"
                  style={styles.formControl}
                  onChange={handleInputChange}
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
