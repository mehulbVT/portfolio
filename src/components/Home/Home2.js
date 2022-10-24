import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
                <br/>I am also a fellow with the <b className="bolditalicgreen">Center for Food Systems and Community Transformation </b> and affiliated with the <b className="bolditalicgreen">Center for Advanced Innovation in Agriculture</b>.
                <br/> My research is focused on the intersection of agriculture, technology, and user-centered design.
              <br />
              <br/>
              When I completed my PhD at the <b className="bolditalicgreen"> University of Florida</b>, I was the first <b className="bolditalicgreen">Latina</b> to earn a doctorate from the department of <b className="bolditalicgreen">Computer and Information Science and Engineering</b>.
              <br />
              I received my master of science in agricultural and biological engineering also at UF and my bachelor of science in engineering from <b className="bolditalicgreen"> Harvey Mudd College</b>.
            </p>
          </Col>

        </Row>
        {/* <Row>
          <Col md={12} id="contact" className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="s-icons">
                <a
                  href="mailto:mehulb@vt.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://github.com/mehulbVT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.linkedin.com/in/mehulb2203"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
