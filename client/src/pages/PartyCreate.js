import React, {useState} from "react";
import { Container, Row } from "react-bootstrap";
import PartyCreationCard from "../components/PartyCreationCard";
import { useAuth } from "../components/contexts/AuthContext";
import API from "../utils/API"

const styles = {
  button: {
    backgroundColor: "#99658a",
  },
};



function PartyCreate() {
  const [formObject, setFormObject] = useState({})
  const {currentUser} = useAuth()
  console.log(currentUser.uid);
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.createParty({
        name: formObject.name,
        date: formObject.date,
        time: formObject.time,
        address: formObject.address,
        zipCode: formObject.zipCode,
        creator: currentUser.uid
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <PartyCreationCard
          onChange={handleInputChange}
        />
      </Row>
    </Container>
  );
}

export default PartyCreate;
