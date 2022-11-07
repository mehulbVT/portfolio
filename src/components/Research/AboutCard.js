import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I work with the <b className="bolditalicgreen">AgrAbility</b>  and <b className="bolditalicgreen">HARVEST </b> programs at Virginia Tech continuing my research in user-centered design in agriculture that I started at the University of Florida. In addition to addressing usability and accessibility of precision agriculture technologies, I am studying how to best utilize big data in agriculture while also protecting the privacy and security rights of the growers.
            <br/>
            My previous work in agriculture includes using hyperspectral imaging techniques to detect AMB in Fuji apples in Korea and creating a crowdsourcing platform to collect ground truth data on lambsquarters in Washington D.C. My work in agriculture was also featured in an episode of LabDaze .
            <br/>
            My technology policy work as a Media Democracy Fund (MDF) PhDX fellows included studying predicitive policing, pre-trial risk assessments, and how social media affects communities of color. This research resulted in numerous writings which can be found on Medium. Find my recent work in the link below.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sarthak</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
