import React from "react";
import GoogleMapReact from 'google-map-react';
import { Container} from "react-bootstrap";
import { Icon } from '@iconify/react';
import Particle from "../Particle";
import locationIcon from '@iconify/icons-mdi/map-marker'



function SimpleMap() {

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text" style={{color:"black"}}>{text}</p>
    </div>
  )

  const apiHasLoaded = (map, maps) => {
    if (map) {
      map.setOptions({
        streetViewControl: true,
        fullscreenControl: true,
        scaleControl: true,
        styles: [{
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{
              visibility: "off"
          }]

      }],
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
    
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
          style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: maps.ControlPosition.BOTTOM_CENTER,
          mapTypeIds: [
              maps.MapTypeId.ROADMAP,
              maps.MapTypeId.SATELLITE,
              maps.MapTypeId.HYBRID
          ]
      },
    
      zoomControl: true,
      clickableIcons: false
      
      });
    }
  };


  
  



  const defaultProps = {
    center: {
      lat: 37.20011944845797,
      lng: -80.41040525808351
    },
    zoom: 18,
    address: "Posadas Lab, 1880 Pratt Drive, Blacksburg, VA"
  };

  return (
    <Container fluid className="home-about-section" id="about">
    <Particle />
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
            onGoogleApiLoaded={({ map, maps }) => {apiHasLoaded(map, maps)}}
            yesIWantToUseGoogleMapApiInternals
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
