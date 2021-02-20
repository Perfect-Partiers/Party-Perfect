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

function PartyDetailCard(props) {
  // Function for reformatting the time from military time
  const getFormattedTime = (fourDigitTime) => {
    const hours24 = parseInt(fourDigitTime.substring(0, 2));
    const hours = ((hours24 + 11) % 12) + 1;
    const amPm = hours24 > 11 ? "pm" : "am";
    const minutes = fourDigitTime.substring(2);
    return hours + minutes + amPm;
  };

  // Function for reformatting the date
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

  return (
    <Col>
      <CardColumns>
        <Card style={styles.card}>
          <Card.Body>
            <Card.Title style={styles.title} className="mb-2">
              {props.name}
            </Card.Title>
            <Card.Text>{formatDate(props.date)}</Card.Text>
            <Card.Text>{getFormattedTime(props.time)}</Card.Text>
            <Card.Text>{props.address.street}</Card.Text>
            <Card.Footer style={styles.footer}>
              <span className="font-weight-bold">Party ID:</span> {props._id}
            </Card.Footer>
          </Card.Body>
        </Card>
      </CardColumns>
    </Col>
  );
}

export default PartyDetailCard;
