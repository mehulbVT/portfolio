import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { TbCSharp } from "react-icons/tb";
// import { CgWebsite } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
// } from "react-icons/di";
// import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
// import Button from "react-bootstrap/Button";

function Expstack() {
  const styleObj = {
    fontSize: 19,
  }

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={12} md={12} className="exp-content">
          <Row>
            <Col lg={12}>
              <b className="bolditalicgreen">Building synergistic data framework for cropping, livestock, and aquaculture producers of Virginia.</b><br/>
              <i>
              (Blacksburg, VA. &nbsp; August 2022 - Present)</i>
            </Col>
          </Row>
          <Row>
          <br />
          <ul>
            <p style={styleObj}><i> <span className="bolditalicgreen">PI</span>: Abhilash Chandel &nbsp; <span className="bolditalicgreen">CoPI</span>: Brianna Posadas, Robin White, Katheryn Parraga-Estrada</i></p>
            <li>
              <span className="green">Brief: </span> This study's objectives include conducting a survey of Virginia's crop, ruminant, and shellfish producers; holding domain-specific in-person or hybrid meetings and breakout sessions; and developing use cases for the framework that are FAIR compliant and beneficial to producers.

            </li>
          </ul>
          </Row>
          {/* <Button
            variant="primary"
            // href="https://icat.vt.edu/content/icat_vt_edu/en/events/2021/05/bridging-physical-distance---icat-creativity---innovation-celebr/immersive-analytics.html"
            target="_blank"
            style={{ width: "100%", margin: "0 auto" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button> */}
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={12} md={12} className="exp-content">
          <Row>
            <Col lg={12}>
              <b className="bolditalicgreen">Testing a responsible innovation approach for integrating precision agriculture (PA) technologies with future farm workers and work..</b><br/>
              <i>
              (Blacksburg, VA. &nbsp; August 2022 - Present)</i>
            </Col>
          </Row>
          <Row>
          <br />
          <ul>
            <p style={styleObj}><i> <span className="bolditalicgreen">PI</span>: Abhilash Chandel &nbsp; <span className="bolditalicgreen">CoPI</span>: Brianna Posadas, Robin White, Katheryn Parraga-Estrada</i></p>
            <li>
              <span className="green">Brief: </span> This study's objectives include conducting a survey of Virginia's crop, ruminant, and shellfish producers; holding domain-specific in-person or hybrid meetings and breakout sessions; and developing use cases for the framework that are FAIR compliant and beneficial to producers.

            </li>
          </ul>
          </Row>
          {/* <Button
            variant="primary"
            // href="https://icat.vt.edu/content/icat_vt_edu/en/events/2021/05/bridging-physical-distance---icat-creativity---innovation-celebr/immersive-analytics.html"
            target="_blank"
            style={{ width: "100%", margin: "0 auto" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Expstack;
