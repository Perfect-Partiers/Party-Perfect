import React from "react";
import { Container, Row } from "react-bootstrap";
import CreateAccountCard from "../components/CreateAccountCard";

function CreateAccount() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <h1>Complete the form below to create your account.</h1>
      </Row>
      <Row className="justify-content-md-center">
        <CreateAccountCard />
      </Row>
    </Container>
  );
}

export default CreateAccount;
