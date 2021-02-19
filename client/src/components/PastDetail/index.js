import React from "react";
import { CardColumns, Card, Col } from "react-bootstrap";

const styles = {
  card: {
    backgroundColor: "#8dc6bf",
  },
};

function PastDetail(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.address.street}</td>
    </tr>
  );
}

export default PastDetail;
