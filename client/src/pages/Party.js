import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SASDetailCard from "../components/SASDetailCard";
import LocationCard from "../components/LocationCard";

const styles = {
  button: {
    backgroundColor: "#99658a",
  },
};

function Party() {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1>Post COVID-19 Party!</h1>
      </Row>
      <Row className="justify-content-center">
        <h2 className="mr-3">Date & Time: "insert date and time here"</h2>
        <h2>Party Code: "insert code here"</h2>
      </Row>
      <Row>
        <Col>
          <SASDetailCard></SASDetailCard>
        </Col>
        <Col>
          <SASDetailCard></SASDetailCard>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <SASDetailCard></SASDetailCard>
        </Col>
        <Col>
          <LocationCard></LocationCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Party;
