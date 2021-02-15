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
            <Card.Text>
              <h3>Party Date</h3>
              <h3>Party Time</h3>
              <h3>Party Location</h3>
            </Card.Text>
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
