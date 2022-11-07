import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaResearchgate, FaGoogle } from "react-icons/fa";

import mehulPhoto from "../../Assets/Mehul.jpg";
import shreyaPhoto from "../../Assets/shreya-mitra.jpeg";
import shikharPhoto from "../../Assets/shikhar-poudel.jpeg";

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
                src={shreyaPhoto}
                className="img-fluid team-pic"
                alt="shreya pic"
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
                src={shikharPhoto}
                className="img-fluid team-pic"
                alt="shikhar pic"
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
                src={mehulPhoto}
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
                  href="mailto:bposadas@vt.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://github.com/bbposadas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.linkedin.com/in/briannaposadas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.researchgate.net/profile/Brianna_Posadas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaResearchgate/>
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://scholar.google.com/citations?user=BITMIlgAAAAJ&hl=en&authuser=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.instagram.com/briposadas/"
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
