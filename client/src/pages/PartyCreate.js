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

  const makeParty = (formObject) => {
    formObject.uid = currentUser.uid;
    formObject.time = getFormattedTime(formObject.time)
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
  
  const getFormattedTime = (fourDigitTime) => {
    const hours24 = parseInt(fourDigitTime.substring(0, 2));
    const hours = ((hours24 + 11) % 12) + 1;
    const amPm = hours24 > 11 ? "pm" : "am";
    const minutes = fourDigitTime.substring(2);

    return hours + minutes + amPm;
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <PartyCreationCard makeParty={makeParty} />
      </Row>
    </Container>
  );
}

export default PartyCreate;
