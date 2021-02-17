import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SASDetailCard from "../components/SASDetailCard";
import SupplyDetailCard from "../components/SupplyDetailCard";
import LocationCard from "../components/LocationCard";
import API from "../utils/API";
import { useParams } from "react-router-dom";

const styles = {
  button: {
    backgroundColor: "#99658a",
  },
};

function Party() {
  const [partyData, setPartyData] = useState({});
  const [partyPosition, setPartyPosition] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPartyData();
    getPartyPosition();
  });

  const getPartyData = () => {
    API.getParty(id)
      .then((res) => {
        setPartyData(res.data);
        console.log("getPartyData = " + res);
      })
      .catch((err) => console.log(err));
  };

  const getPartyPosition = () => {
    API.getPartyMap(id).then((res) => {
      console.log("getPartyPosition = " + res);
      setPartyPosition({
        lat: parseFloat(res.features[0].geometry.coordinates[1]),
        lon: parseFloat(res.features[0].geometry.coordinates[0]),
      });
    });
  };
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
          <SASDetailCard cardTitle="Schedule" tableTitleOne="Time" tableTitleTwo="Activity" ></SASDetailCard>
        </Col>
        <Col>
          <SupplyDetailCard ></SupplyDetailCard>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <SASDetailCard cardTitle="Attendees" tableTitleOne="Name" tableTitleTwo="Email"></SASDetailCard>
        </Col>
        <Col>
          <LocationCard
            lat={partyPosition.lat}
            lon={partyPosition.lon}
            name={partyData.name}
            address={partyData.address.street}
          ></LocationCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Party;
