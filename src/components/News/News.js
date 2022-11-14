import React from "react";
import { Container} from "react-bootstrap";
import Twitter from "./Twitter";
import Particle from "../Particle";

function News() {
  return (
    <section>
    <Container fluid className="home-about-section" id="about">
      <Container  className="home-content">
      <Particle/>
      <Twitter />
      </Container>
    </Container>
    </section>
  );
}
export default News;

