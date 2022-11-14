import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaResearchgate, FaGoogle } from "react-icons/fa";

import SimpleMap from "./Map";

function Contact() {
  return (
    <section>
    <SimpleMap/>
    <Container fluid className="home-about-section" id="about">
      <Container  className="home-content">
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
    </section>
  );
}
export default Contact;

