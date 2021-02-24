import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Card from "react-bootstrap/Card";

const styles = {
  locationDetail: {
    backgroundColor: "#8dc6bf",
    width: "500px",
  },
  title: {
    color: "#ffffff",
    fontSize: "25px",
    fontWeight: "bolder",
  },
  width: "300px",
  height: "300px",
  markerBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

const LocationCard = (props) => {
  const [viewport, setViewport] = useState({
    latitude: props.lat,
    longitude: props.lon,
    zoom: -1,
    width: "300px",
    height: "300px",
  });

  const staticMarker = {
    latitude: props.lat,
    longitude: props.lon,
    name: props.name,
    address: props.address,
  };

  const [markerSelect, setMarkerSelect] = useState(null);

  useEffect(() => {
    if (viewport.zoom === -1) {
      setTimeout(() => {
        setViewport({
          ...viewport,
          zoom: 15,
        });
      }, 1000);
    } else {
      setViewport({
        ...viewport,
        latitude: props.lat,
        longitude: props.lon,
      });
    }
  }, [viewport.zoom]);

  return (
    <Card style={styles.locationDetail} className="mb-4 mt-3">
      <Card.Body>
        <Card.Title style={styles.title} className="mb-3">
          Location
        </Card.Title>
        <center>
          <h4>{props.address}</h4>
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
                  <img src="/favicon-16x16.png"></img>
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
        </center>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;
