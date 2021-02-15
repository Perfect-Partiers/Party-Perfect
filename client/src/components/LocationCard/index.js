import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Card from "react-bootstrap/Card";

const styles = {
  locationDetail: {
    backgroundColor: "#8dc6bf",
  },
  width: "300px",
  height: "300px",
  markerBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

const LocationCard = () => {
  const [viewport, setViewport] = useState({
    latitude: 47.425081,
    longitude: -122.146384,
    zoom: 15,
    width: "300px",
    height: "300px",
  });

  const staticMarker = {
    latitude: 47.425081,
    longitude: -122.146384,
    name: "Party Name Here",
    address: "address here",
  };

  const [markerSelect, setMarkerSelect] = useState(null);

  return (
    <Card style={styles.locationDetail}>
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <h4>props.address</h4>
        <div>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            <Marker
              latitude={staticMarker.latitude}
              longitude={staticMarker.longitude}
            >
              <button
                style={styles.markerBtn}
                onClick={(e) => {
                  e.preventDefault();
                  setMarkerSelect(staticMarker);
                }}
              >
                <img src="favicon-16x16.png"></img>
              </button>
            </Marker>
            {markerSelect ? (
              <Popup
                latitude={staticMarker.latitude}
                longitude={staticMarker.longitude}
                onClose={() => {
                  setMarkerSelect(null);
                }}
              >
                <div>
                  <small>{staticMarker.name}</small>
                  <br />
                  <small>{staticMarker.address}</small>
                </div>
              </Popup>
            ) : null}
          </ReactMapGl>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;
