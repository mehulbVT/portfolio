import React from "react";
import GoogleMapReact from 'google-map-react';
import { Container} from "react-bootstrap";
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

import { FaLocationArrow} from "react-icons/fa";



function SimpleMap() {

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={FaLocationArrow} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

  const defaultProps = {
    center: {
      lat: 37.1998771,
      lng: -80.4112423
    },
    zoom: 13,
    address: "1880 Pratt Drive, Blacksburg, VA"
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="home-content">
        <div style={{ height: '500px', width: '80%', margin: "auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.6em" }}>
            <span className="green"> Location </span> : 1880 Pratt Drive, Blacksburg, VA
          </h1>
          <br />



          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBqNM13yJ6OPsBj0kWB172FXncKcT1tl8c" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text={defaultProps.address}
            />
          </GoogleMapReact>
        </div>
      </Container>
    </Container>
  );
}

export default SimpleMap;
