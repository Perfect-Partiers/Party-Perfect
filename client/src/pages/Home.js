import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import PartyDetailCard from "../components/PartyDetailCard";
import PastAccordion from "../components/PastAccordion";

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
  return (
    <Container>
      <Row className="mt-5 mb-3 justify-content-md-center">
        <h1>Welcome Perfect Partier Padridg!</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Button href="/partycreate" style={styles.button} className="mr-4">
          Create a Party
        </Button>
        <Button href="#" style={styles.button}>
          Join a Party
        </Button>
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
