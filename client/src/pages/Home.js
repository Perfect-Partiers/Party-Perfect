import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Row, Modal, Form } from "react-bootstrap";
import PartyDetailCard from "../components/PartyDetailCard";
import PastAccordion from "../components/PastAccordion";
import API from "../utils/API";
import { useAuth } from "../components/contexts/AuthContext";

import firebase from "../firebase.js";
import { useAuth } from "../components/contexts/AuthContext";

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
     modal: {
          backgroundColor: "#FFFFF0",
     },

     modalTitle: {
          color: "#ffffff",
          fontWeight: "bold",
     },

     modalHead: {
          backgroundColor: "#ee6a59",
     },

     formControl: {
          width: "300px",
          margin: "auto",
          marginTop: "20px",
     },

     modalButton: {
          backgroundColor: "#99658A",
          borderColor: "#99658A",
          fontWeight: "bold",
          fontSize: "18px",
          marginTop: "20px",
     },
};

function Home() {
  const { currentUser } = useAuth();
  const partyRef = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [parties, setParties] = useState([]);
  const [pastParties, setPastParties] = useState([]);

  // Setting today's date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  // Use Effect for check user, which in turn calls loadParties
  useEffect(() => {
    checkUser(currentUser);
  }, []);

  const loadParties = () => {
    API.getParties(currentUser.uid)
      .then((res) => {
        let currentParties = res.data.parties.filter(
          (party) => party.date >= today
        );
        setParties(currentParties);

        let pastParties = res.data.parties.filter(
          (party) => party.date < today
        );
        setPastParties(pastParties);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // this function uses the currentUser info from firebase (user parameter) and checks if the user is in mongodb. if not, add user to mongodb, then load all of the parties associated with that user
  const checkUser = (user) => {
    API.checkUser(user.uid)
      .then((res) => {
        if (res.data.length === 0) {
          console.log("user not in mongodb");
          API.createUser({
            email: user.email,
            uid: user.uid,
          }).then((results) => {
            console.log(results);
          });
        } else {
          console.log("user already in mongodb");
        }
        loadParties();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddParty = (e) => {
    e.preventDefault();

    let partyId = partyRef.current.value;
    console.log(partyId);

    API.saveParty(partyId, currentUser.uid)
      .then((res) => {
        console.log("Added party to your database!");
        addAttendee(partyId);

        loadParties();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addAttendee = (partyId) => {
    let updates = {
      attendees: [{ name: currentUser.displayName, email: currentUser.email }],
    };
    API.updateParty(partyId, updates)
      .then((res) => {
        console.log("Added current user as attendee");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row className="mt-5 mb-3 justify-content-md-center">
        <h1>Welcome Perfect Partier {currentUser.displayName}!</h1>
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
          <Modal.Header closeButton style={styles.modalHead}>
            <Modal.Title style={styles.modalTitle}>Join a Party</Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.modal} className="font-weight-bold">
            Enter the party ID below
            <Form onSubmit={handleAddParty}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Party ID"
                  style={styles.formControl}
                  ref={partyRef}
                ></Form.Control>
                <Button style={styles.modalButton} type="submit">
                  Join Party
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </Row>
      <Row style={styles.heading}>
        <h2>Upcoming</h2>
      </Row>
      <Row className="justify-content-left">
        {parties.map((party) => (
          <PartyDetailCard key={party._id} {...party} />
        ))}
      </Row>
      <Row style={styles.heading}>
        <h2>Past Events</h2>
      </Row>
      <Row className="mb-5">
        <PastAccordion parties={pastParties}></PastAccordion>
      </Row>
    </Container>
  );
}

export default Home;
