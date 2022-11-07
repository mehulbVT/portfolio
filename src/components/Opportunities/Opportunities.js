import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Opportunities() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="home-content">
        <div style={{ height: '500px', width: '80%', margin: "auto", textAlign: "center" }}>
          I am always looking to recruit graduate student (MS or PhD) in Sociology at Virginia Tech to work with me on the (1) 
          climate change and sustainability issues and (2) social implications of emerging digital technologies in agriculture or other sectors 
          (Big Data, Artificial Intelligence). 
          If you are interested in this area of research, please send me a brief email and tell me about your interests and qualifications:
          bposadas@vt.edu


        </div>
      </Container>
    </Container>
  );
}

export default Opportunities;
