import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import PartyCreationCard from "../components/PartyCreationCard";
import { useAuth } from "../components/contexts/AuthContext";
import API from "../utils/API";

const styles = {
  button: {
    backgroundColor: "#99658a",
  },
};

function PartyCreate() {
  const { currentUser } = useAuth();
  console.log(currentUser.uid);

  function makeParty(formObject) {
    console.log(formObject)
    API.createParty({
      name: formObject.name,
      date: formObject.date,
      time: formObject.time,
      address: {
        street: formObject.address,
        zip: formObject.zip,
      },
      creator: currentUser.uid,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <PartyCreationCard makeParty={makeParty} />
      </Row>
    </Container>
  );
}

export default PartyCreate;
