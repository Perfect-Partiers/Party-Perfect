import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
    width: "350px",
    margin: "0",
  },

  title: {
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: "bolder",
  },

  footer: {
    borderRadius: "10px",
    backgroundColor: "#fffff0",
  },

  partyId: {
    color: "#ee6a59",
  },
};

const PartyDetailCard = (props) => {
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

  const url = "/party/" + props._id;

  return (
    <Col className="column">
      <Link className="link" to={url}>
        <Card className="partyCard mt-3 text-center" style={styles.card}>
          <Card.Body>
            <Card.Title style={styles.title} className="mb-2">
              {props.name}
            </Card.Title>
            <Card.Text className="my-2 font-weight-bold text-dark">
              {formatDate(props.date)}
            </Card.Text>
            <Card.Text className="my-2 text-dark">{props.time}</Card.Text>
            <Card.Text className="my-2 text-dark">
              {props.address.street}
            </Card.Text>
            <Card.Footer
              className="text-dark font-weight-bold"
              style={styles.footer}
            >
              <span className="" style={styles.partyId}>
                Party ID:
              </span>{" "}
              {props._id}
            </Card.Footer>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default PartyDetailCard;
