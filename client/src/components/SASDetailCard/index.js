import React from "react";
import { Card, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const styles = {
  SASDetail: {
    backgroundColor: "#8dc6bf",
  },
};

function SASDetailCard() {
  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
        <Card.Title>props.cardTitle</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <th>props.tableTitle1</th>
              <th>props.tableTitle2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Map: props.listItemA </td>
              <td>
                Map: props.listItemB{" "}
                <Button variant="outline-light">
                  <FontAwesomeIcon icon={faTrashAlt} />{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default SASDetailCard;
