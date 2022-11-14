import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import profilePhoto from "../../Assets/brianna.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profilePhoto}
                className="img-fluid brianna-pic"
                alt="brianna pic"
              />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is <b className="bolditalicgreen">Dr. Brianna B. Posadas </b> and I am an Assistant Professor at the <b className="bolditalicgreen">School of Plant and Environmental Sciences </b> at
              <b className="bolditalicgreen"> Virginia Tech</b>{" "}.
              <br />I am also a fellow with the &nbsp;
              <a className="bolditalicgreen" href="https://foodsystems.centers.vt.edu/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>Center for Food Systems and Community Transformation </a> &nbsp;
              and affiliated with the &nbsp;
              <a className="bolditalicgreen" href="https://caia.cals.vt.edu/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>Center for Advanced Innovation in Agriculture</a>.
              <br /> My research is focused on the intersection of agriculture, technology, and user-centered design.
              <br />
              <br />
              When I completed my PhD at the <b className="bolditalicgreen"> University of Florida</b>, I was the first &nbsp;
              <a className="bolditalicgreen" href="https://www.cise.ufl.edu/spotlight-posadas-graduates-as-the-first-latina-to-earn-a-ph-d-from-uf-cise/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>Latina</a>&nbsp;
              
              to earn a doctorate from the department of <b className="bolditalicgreen">Computer and Information Science and Engineering</b>.
              <br />
              I received my master of science in agricultural and biological engineering also at UF and my bachelor of science in engineering from &nbsp;
              <a className="bolditalicgreen" href="http://www.hmc.edu/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>Harvey Mudd College</a>&nbsp;
              
            </p>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
