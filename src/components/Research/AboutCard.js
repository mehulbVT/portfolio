import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I work with the <a className="bolditalicgreen" href="https://agrability.alce.vt.edu" style={{ position: "relative" }} target="_blank" rel='noreferrer'>AgrAbility</a> and&nbsp;
            <a className="bolditalicgreen" href="https://www.harvestrcn.org/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>HARVEST</a> programs at Virginia Tech continuing my research in user-centered design in agriculture that I started at the University of Florida. In addition to addressing usability and accessibility of precision agriculture technologies, I am studying how to best utilize big data in agriculture while also protecting the privacy and security rights of the growers.
            <br />
            My previous work in agriculture includes using&nbsp;
            <a className="bolditalicgreen" href="https://www.youtube.com/watch?v=ei4YhGInJ_4" style={{ position: "relative" }} target="_blank" rel='noreferrer'>hyperspectral imaging techniques to detect AMB</a>&nbsp;

            in Fuji apples in Korea and creating a crowdsourcing platform to collect ground truth data on lambsquarters in Washington D.C. My work in agriculture was also featured in an episode of&nbsp;
            <a className="bolditalicgreen" href="https://www.youtube.com/watch?v=7pVX13jazHg&t=223s" style={{ position: "relative" }} target="_blank" rel='noreferrer'>LabDaze</a>.
            <br />
            My technology policy work as a&nbsp;
            <a className="bolditalicgreen" href="http://mediademocracyfund.org/matching-technology-talent-with-frontline-social-justice-organizations/" style={{ position: "relative" }} target="_blank" rel='noreferrer'>Media Democracy Fund (MDF) PhDX fellows</a>&nbsp;

            included studying predicitive policing, pre-trial risk assessments, and how social media affects communities of color. This research resulted in numerous writings which can be found on&nbsp;
            <a className="bolditalicgreen" href="https://medium.com/@bri.posadas" style={{ position: "relative" }} target="_blank" rel='noreferrer'>Medium</a>.
            <br />
            Find my recent work in the link below.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
