import React from "react";
import { Card, Table } from "react-bootstrap";
import PastDetail from "../PastDetail"

const styles = {
  locationDetail: {
    backgroundColor: "#8dc6bf",
  },
};

function LocationCard() {
  return (
      <Card style={styles.locationDetail}>
          
          <Card.Body>
          <Card.Title>Location</Card.Title>
          <h4>props.address</h4>
          <img src="https://via.placeholder.com/100"/>
          </Card.Body>
      </Card>
  );
}

export default LocationCard;