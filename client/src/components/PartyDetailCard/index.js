import React from "react";
import { CardColumns, Card, Col } from "react-bootstrap";
import "./style.css";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },

  title: {
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: "bolder",
  },

  footer: {},
};

function PartyDetailCard() {
  return (
    <Col>
      <CardColumns>
        <Card style={styles.card}>
          <Card.Body>
            <Card.Title style={styles.title} className="mb-2">
              Party Name
            </Card.Title>
            <Card.Text> Party Name</Card.Text>
            <Card.Text> Party Time</Card.Text>
            <Card.Text> Party Location</Card.Text>
            <Card.Footer>Attendees: 12</Card.Footer>
            <Card.Footer style={styles.footer}>
              <span className="font-weight-bold">Attendees:</span> 12
            </Card.Footer>
          </Card.Body>
        </Card>
      </CardColumns>
    </Col>
  );
}

export default PartyDetailCard;
