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
          {partyData.time}
        </h2>
        <h2>Party Code: {partyData._id}</h2>
      </Row>
      <Row>
        <Col>
          <ScheduleDetailCard
            schedule={partyData.schedule}
            // schedule={[
            //   { activity: "dancing", time: "2:00AM" },
            //   { activity: "running", time: "1:00PM" },
            // ]}
            partyId={partyData._id}
          ></ScheduleDetailCard>
        </Col>
        <Col>
          <SupplyDetailCard
            supplies={partyData.supplies}
            // supplies={[{ supply: "pizza" }, { supply: "candy" }]}
            partyId={partyData._id}
          ></SupplyDetailCard>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <AttendeeDetailCard
            attendees={partyData.attendees}
            // attendees={[
            //   { name: "Padridg", email: "pad@ridg.com" },
            //   { name: "Brigid", email: "bri@gid.com" },
            // ]}
            partyId={partyData._id}
          ></AttendeeDetailCard>
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
