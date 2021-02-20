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
  // console.log(currentUser.uid);

  function makeParty(formObject) {
    console.log(currentUser.uid);
    formObject.uid = currentUser.uid;
    console.log(formObject);
    API.createParty({
      name: formObject.name,
      date: formObject.date.toString(),
      creator: formObject.uid,
      time: formObject.time.toString(),
      address: {
        street: formObject.address.toString(),
        zip: parseInt(formObject.zip),
      },
    })
      .then((res) => window.location.replace("/home"))
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
