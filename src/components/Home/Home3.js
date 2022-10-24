import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import profilePhoto from "../../Assets/team.png";

function Home3() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" style={{textAlign: "left"}}>
            <h1 style={{ fontSize: "2.6em" , textAlign: "center"}}>
               INTRODUCING THE <span className="green">TEAM</span>
            </h1>
            <h2 className="bolditalicgreen" style={{ fontSize: "2.6em" , textAlign: "left"}}>
            Shreya Mitra
            </h2>
              <p>
                Hello I am shreya Mitra.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profilePhoto}
                className="img-fluid team-pic"
                alt="team pic"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description" style={{textAlign: "left"}}>
            <h2 className="bolditalicgreen" style={{ fontSize: "2.6em" , textAlign: "left"}}>
            Shikhar Poudel
            </h2>
              <p>
                Hello I am Shikhar Poudel.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profilePhoto}
                className="img-fluid team-pic"
                alt="team pic"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description" style={{textAlign: "left"}}>
            <h2 className="bolditalicgreen" style={{ fontSize: "2.6em" , textAlign: "left"}}>
            Mehul Bhanushali
            </h2>
              <p>
                Hello I am Mehul Bhanushali
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profilePhoto}
                className="img-fluid team-pic"
                alt="team pic"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
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
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
