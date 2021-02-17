import React from "react";
import React, { useState, useEffect } from "react";
import { Container, Button, Row, Modal, Form } from "react-bootstrap";
("react-bootstrap");
import PartyDetailCard from "../components/PartyDetailCard";
import PastAccordion from "../components/PastAccordion";
import API from "../utils/API";

const styles = {
  button: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
    width: "200px",
    height: "45px",
  },

  heading: {
    marginTop: "40px",
  },
};

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    loadParties();
  }, []);

  const loadParties = () => {
    API.getParties()
      .then((res) => {
        console.log("hello");
        setParties(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row className="mt-5 mb-3 justify-content-md-center">
        <h1>Welcome Perfect Partier Padridg!</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Button href="/partycreate" style={styles.button} className="mr-4">
          Create a Party
        </Button>
        <Button href="#" style={styles.button} onClick={handleShow}>
          Join a Party
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="text-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Join a Party</Modal.Title>
          </Modal.Header>
          <Modal.Body>Enter the party ID below.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
      <Row style={styles.heading}>
        <h2>Upcoming</h2>
      </Row>
      <Row>
        <PartyDetailCard></PartyDetailCard>
      </Row>
      <Row style={styles.heading}>
        <h2>Past Events</h2>
      </Row>
      <Row>
        <PastAccordion></PastAccordion>
      </Row>
    </Container>
  );
}

export default Home;
