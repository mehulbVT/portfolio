import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle, FaResearchgate } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Mehul Bhanushali</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Brianna Posadas</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="s-icons">
              <a
                href="mailto:bposadas@vt.edu"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://github.com/bbposadas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://www.linkedin.com/in/briannaposadas/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://www.researchgate.net/profile/Brianna_Posadas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaResearchgate/>
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://scholar.google.com/citations?user=BITMIlgAAAAJ&hl=en&authuser=1"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://www.instagram.com/briposadas/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
