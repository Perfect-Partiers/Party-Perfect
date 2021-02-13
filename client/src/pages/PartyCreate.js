import React from "react";
import { Container, Row } from "react-bootstrap";
import PartyCreationCard from "../components/PartyCreationCard";


const styles = {
  button: {
    backgroundColor: "#99658a",
  },
};

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <PartyCreationCard />
      </Row>
    </Container>
  );
}

export default Home;