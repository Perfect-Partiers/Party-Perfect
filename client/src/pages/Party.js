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
  }, []);

  const getPartyData = () => {
    API.getParty(id)
      .then((res) => {
        setPartyData(res.data);
        console.log(res.data);
        // getPartyPosition();
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

  const getFormattedTime = (fourDigitTime) => {
    const hours24 = parseInt(fourDigitTime.substring(0, 2));
    const hours = ((hours24 + 11) % 12) + 1;
    const amPm = hours24 > 11 ? "pm" : "am";
    const minutes = fourDigitTime.substring(2);

    return hours + minutes + amPm;
  };

  // const getPartyPosition = () => {
  //   API.getPartyMap(id).then((res) => {
  //     console.log("getPartyPosition = " + res);
  //     setPartyPosition({
  //       lat: parseFloat(res.features[0].geometry.coordinates[1]),
  //       lon: parseFloat(res.features[0].geometry.coordinates[0]),
  //     });
  //   });
  // };
  return (
    <Container>
      <Row className="justify-content-center">
        <h1>{partyData.name}</h1>
      </Row>
      <Row className="justify-content-center">
        <h2 className="mr-3">
          Date & Time: {formatDate(partyData.date)} at{" "}
          {getFormattedTime(partyData.time)}
        </h2>
        <h2>Party Code: {partyData._id}</h2>
      </Row>
      <Row>
        <Col>
          <SASDetailCard
            cardTitle="Schedule"
            tableTitleOne="Time"
            tableTitleTwo="Activity"
            schedule={partyData.schedule}
          ></SASDetailCard>
        </Col>
        <Col>
          <SupplyDetailCard></SupplyDetailCard>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <SASDetailCard
            cardTitle="Attendees"
            tableTitleOne="Name"
            tableTitleTwo="Email"
            attendees={partyData.attendees}
          ></SASDetailCard>
        </Col>
        <Col>
          {/* <LocationCard
            lat={partyPosition.lat}
            lon={partyPosition.lon}
            name={partyData.name}
            address={partyData.address.street}
          ></LocationCard> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Party;
