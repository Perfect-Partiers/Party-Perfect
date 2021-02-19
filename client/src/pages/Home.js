import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Row, Modal, Form } from "react-bootstrap";
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

  useEffect(() => {
    checkUser(currentUser);
    // loadParties();
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

  // this function uses the currentUser info from firebase (user parameter) and checks if the user is in mongodb. if not, add user to mongodb, then load all of the parties associated with that user
  const checkUser = (user) => {
    console.log(user);
    API.checkUser(user.uid)
      .then((res) => {
        console.log(res.data);
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

  function handleAddParty(e) {
    e.preventDefault();

    let partyId = partyRef.current.value;
    console.log(partyId);

    // API.getParty(partyId)
    //   .then((res) => {
    //     console.log("Found the party");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    handleClose();
  }
  // We need to detemrine what we are doing with this. Is it just being added to state?

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
