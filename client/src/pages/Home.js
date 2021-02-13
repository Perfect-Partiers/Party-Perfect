import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import PartyDetailCard from "../components/PartyDetailCard";
import PastAccordion from "../components/PastAccordion"

const styles = {
  button: {
    backgroundColor: "#99658a",
  },
};

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Welcome Perfect Partier Padridg!</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Button href="/partycreate" style={styles.button} className="mr-4 ">Create a Party</Button>
        <Button href="#" style={styles.button}>Join a Party</Button>
      </Row>
      <h2>Upcoming</h2>
      <Row>
 
        <PartyDetailCard></PartyDetailCard>
      </Row>
      <h2>Past Events</h2>

      <Row>
        <PastAccordion></PastAccordion>
      </Row>
    </Container>
  );
}

export default Home;
