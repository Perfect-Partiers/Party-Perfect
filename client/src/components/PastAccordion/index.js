import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import PastDetail from "../PastDetail";

const styles = {
  accordion: {
    backgroundColor: "#8dc6bf",
  },
};

function PastAccordion() {
  return (
    <Accordion>
      <Card style={styles.accordion}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Click to view past parties.
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Party Name</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th># Attendees</th>
                </tr>
              </thead>
              <tbody>
                <PastDetail></PastDetail>
              </tbody>
            </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default PastAccordion;
