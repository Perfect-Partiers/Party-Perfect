import React, { useState } from "react";
import { Card, Table, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";
import { useAuth } from "../contexts/AuthContext";
import "./style.css";

const styles = {
  title: {
    color: "#ffffff",
    fontSize: "25px",
    fontWeight: "bolder",
  },
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
  table: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
  },
  tableHead: {
    color: "#ee6a59",
  },
};

function SupplyDetailCard(props) {
  const { currentUser } = useAuth();
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
    addSupply(formObject);
  };

  const addSupply = (supply) => {
    API.updateParty(props.partyId, {
      supplies: [
        {
          supply: supply.supply,
        },
      ],
    });
    handleClose();
    props.getPartyData();
  };

  const handleDeleteBtn = (event, id, supply) => {
    API.updateParty(props.partyId, {
      supplies: [
        {
          supply: supply,
          _id: id,
        },
      ],
    });
    props.getPartyData();
  };

  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title style={styles.title}>Supplies</Card.Title>
        <Table responsive style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th>Supply</th>
              {currentUser.uid === props.creator ? <th>Remove</th> : ""}
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
                    {currentUser.uid === props.creator ? (
                      <td>
                        <Button
                          style={styles.tButton}
                          value={supplyItem._id}
                          onClick={(event) =>
                            handleDeleteBtn(event, supplyItem)
                          }
                          className="hoverButton"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        {currentUser.uid === props.creator ? (
          <center>
            <Button
              href="#"
              style={styles.button}
              onClick={handleShow}
              className="hoverButton"
            >
              Add Supply
            </Button>
          </center>
        ) : (
          ""
        )}

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
                <Button
                  style={styles.modalButton}
                  type="submit"
                  className="hoverButton"
                >
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
