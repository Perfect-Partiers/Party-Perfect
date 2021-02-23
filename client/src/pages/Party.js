import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScheduleDetailCard from "../components/ScheduleDetailCard";
import SupplyDetailCard from "../components/SupplyDetailCard";
import LocationCard from "../components/LocationCard";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import AttendeeDetailCard from "../components/AttendeeDetailCard";

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
  }, []);

  const getPartyData = () => {
    API.getParty(id)
      .then((res) => {
        setPartyData(res.data);
        console.log(res.data);
        getPartyPosition();
      })
      .catch((err) => console.log(err));
  };

  const formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return (
        date.getMonth() +
        1 +
        "/" +
        (date.getDate() + 1) +
        "/" +
        date.getFullYear()
      );
    }
  };

  const getPartyPosition = () => {
    console.log("====getPartyPosition====");
    API.getMapBoxData(id)
      .then((res) => {
        console.log(res.data);
        setPartyPosition({
          lat: parseFloat(res.data.features[0].geometry.coordinates[1]),
          lon: parseFloat(res.data.features[0].geometry.coordinates[0]),
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <h1>{partyData.name}</h1>
      </Row>
      <Row className="justify-content-center mb-4">
        <h2 className="mr-3">
          Date & Time: {formatDate(partyData.date)} at {partyData.time}
        </h2>
        <h2>Party Code: {partyData._id}</h2>
      </Row>
      <Row>
        <Col>
          <ScheduleDetailCard
            schedule={partyData.schedule}
            creator={partyData.creator}
            partyId={partyData._id}
          ></ScheduleDetailCard>
        </Col>
        <Col>
          <SupplyDetailCard
            supplies={partyData.supplies}
            creator={partyData.creator}
            partyId={partyData._id}
          ></SupplyDetailCard>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <AttendeeDetailCard
            attendees={partyData.attendees}
            creator={partyData.creator}
            partyId={partyData._id}
          ></AttendeeDetailCard>
        </Col>
        <Col>
          <LocationCard
            lat={partyPosition.lat !== undefined ? partyPosition.lat : 0}
            lon={partyPosition.lon !== undefined ? partyPosition.lon : 0}
            name={partyData.name !== undefined ? partyData.name : ""}
            address={
              partyData.address !== undefined ? partyData.address.street : ""
            }
          ></LocationCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Party;
