import React from "react";
import "../../assets/css/location.css";
//import LocationImage from "../../assets/img/location-img.png";
import MapsDesktopImage from "../../assets/img/location/map-img-desktop.png";
import MapsMobileImage from "../../assets/img/location/map-img-mobile.png";
//import iconImage from "../../assets/img/location/location-icon.png";
/*
import { FaLocation } from "react-icons/FontAwesomeIcon/fa-location-dot";
import { ImLocation2 } from 'react-icons/im';*/
import { Row, Col, Container } from "react-bootstrap";
import {  MyDiv,  HeadingOne,  HeadingThree,  PTag,  SpanTag,  HeadingFour,  HeadingTwo,  HeadingFive,  Section,} from "../../common/Common";

function Maplocation() {
    return (
        <>
        <Section className="our-map-loaction">
          <Container>
            <Row>
              <Col className="col-12">
                <HeadingTwo className="our-map-title">
                  Our <strong> Locations</strong>{" "}
                </HeadingTwo>
                <MyDiv className="our-map-data">
                {/* <img
                  src={MapsMobileImage}
                  className="show-for-small-only img-fluid"
                  alt="map"
                />
                <img
                  src={MapsDesktopImage}
                  className="hide-for-small-only img-fluid"
                  alt="map"
                /> */}
                <img    src={MapsDesktopImage}  className=" img-fluid" alt="map" />
                </MyDiv>
              </Col>
            </Row>
          </Container>
        </Section>
        </>
  );
}

export default Maplocation;