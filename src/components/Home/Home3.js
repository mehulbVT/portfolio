import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import mehulPhoto from "../../Assets/Mehul.jpg";
import shreyaPhoto from "../../Assets/shreya-mitra.jpeg";
import shikharPhoto from "../../Assets/shikhar-poudel.jpeg";

function Home3() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              INTRODUCING THE <span className="green">TEAM</span>
            </h1>
          </Col>
          <Col md={8} className="home-about-description" style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: "2.6em", textAlign: "left" }}>
              <a className="bolditalicgreen" href="https://www.linkedin.com/in/shreyamitra-eval/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>
                Shreya Mitra
              </a>
            </h2>
            <p className="home-about-body">
              Shreya Mitra has over 10 year of research work experience. She is perusing her PhD in digital agriculture.
              Shreya is interested in exploring Human Computer Interaction (HCI) in the domain of digital agriculture.
              She plans to work towards mapping digital diffusion and exploring user experience and behavioral change
              due to digitalization among the farming community in India.
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Shreya is currently involved in a project sponsored by USDA and the University of Nebraska Lincoln titled,
              “Building synergistic data framework for cropping, livestock, and aquaculture producers of Virginia.”
              She is also conducting a scoping review to find out the overlap between big data, AI, and machine
              learning with program evaluation. She has extensive experience in both qualitative and quantitative
              research.
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              For last year (August 2021 to August 2022), she was working with the Assessment and Professional
              Development team of the Student Affairs, Virginia Tech. Her role involved qualitative and designing
              and conducting online survey, quantitative and qualitative data analysis, use of various data
              visualization rationales to represent the findings, and providing training programs for Assessment
              Represents of 26 Departments on tops related to Evaluation and Assessment.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={shreyaPhoto}
                className="img-fluid team-pic"
                alt="shreya pic"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description" style={{ textAlign: "left" }}>
            <h2 className="bolditalicgreen" style={{ fontSize: "2.6em", textAlign: "left" }}>
              <a className="bolditalicgreen" href="https://www.linkedin.com/in/shikhar-poudel-234a6b1b/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>
                Shikhar Poudel
              </a>
            </h2>
            <p className="home-about-body">
              Shikhar is young, energetic and enthusiastic man with good analytical skills in the field and laboratory.
              He can work well as part of a team or individually under pressure and am always eager to learn something new,
              meet new challenges, and gain experience in the working environment.
              He aims for career advancement through a continuous learning process to put his knowledge into practice.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={shikharPhoto}
                className="img-fluid team-pic"
                alt="shikhar pic"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description" style={{ textAlign: "left" }}>
            <h2 className="bolditalicgreen" style={{ fontSize: "2.6em", textAlign: "left" }}>
              <a className="bolditalicgreen" href="https://www.linkedin.com/in/mehulb2203/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>
                Mehul Bhanushali
              </a>
            </h2>
            <p  className="home-about-body">
              Pursuing Master's in Computer Science from Virginia Tech Fall'23.
              He have more than two years of professional Software Engineering Experience at Equifax. He was involved in Product development, testing, planning release cycles for new requirements, and working as a java developer.
              He completed his BTech in Information Technology from KJ Somaiya College of Engineering 2015-2019.
              Portfolio website: <a className="bolditalicgreen" href="https://mehulbhanushali220.wixsite.com/" style={{ position: "relative" }} target="_blank" rel='noreferrer'> Website</a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={mehulPhoto}
                className="img-fluid team-pic"
                alt="team pic"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
