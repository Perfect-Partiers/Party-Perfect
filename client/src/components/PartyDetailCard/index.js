import React from "react";
import {CardColumns, Card, Col} from "react-bootstrap";

const styles = {
  card: {
      backgroundColor: "#8dc6bf"
  },
};

function PartyDetailCard() {
  return (
    <Col>
    <CardColumns>
      <Card style={styles.card}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Party Name</Card.Subtitle>
          <Card.Text>
            <h3>Party Date</h3>
            <h3>Party Time</h3>
            <h3>Party Location</h3>
          </Card.Text>
          <Card.Footer>Attendees: 12</Card.Footer>
        </Card.Body>
      </Card>
    </CardColumns>
    </Col>
  );
}

export default PartyDetailCard;
