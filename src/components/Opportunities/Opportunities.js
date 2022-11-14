import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Opportunities() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container className="home-content">
        <div style={{ width: '80%', margin: "auto" }}>
          <p className="home-about-body">
            I am always looking for students (Undergrad, MS, and PhD) at Virginia Tech to work on the 
            project with me. Virginia Tech students of all levels are welcome to show 
            interest in and learn about the research focussed on intersection of agriculture, technology, and user-centered design .
          </p>
          <p className="home-about-body">
            Students who have already done research, have publications that have been reviewed by their peers, 
            have relevant work experience, and have clearly stated their research interests are most likely to 
            be accepted. 
            <br/>
            For current graduate students at Virginia Tech: If you are interested in joining the 
            group and/or becoming Dr. Posadas' advisee, the best approach is to attend the weekly lab meeting 
            (currently on Mondays at 3:30 pm) or send an email to <a className="bolditalicgreen" href="mailto:bposadas@vt.edu" style={{position: "relative"}}>  bposadas@vt.edu</a> for a meeting invitation.
            </p>

            <p className="home-about-body">
            If you are interested in my area of research, please send me a brief email and tell me about your 
            interests and qualifications: <a className="bolditalicgreen" href="mailto:bposadas@vt.edu" style={{position: "relative"}}>bposadas@vt.edu</a> with the following information:
            <br/>
            An introduction to yourself: Who are you? Where are you from? What are you passionate about? What are your goals? Which active project(s) would you be interested in working on? Or propose your own project!
            What skills do you have? Please send a copy of your CV, resume, an outline of your experience, or a cool project you've worked on.
            Are you available for a meeting? Feel free to come by during my office hours, or we can schedule a time to meet (virtually or in person) and chat.
            <br/>
            Please note that I apologize in advance for any delays in my response.
            <br/>
            To learn more information about my work and research goals, please check out my website: 
            <a className="bolditalicgreen" href="https://bbposadas.github.io/" style={{position: "relative"}} target="_blank" rel='noreferrer'> https://bbposadas.github.io</a>
            </p>
            
        </div>
      </Container>
    </Container>
  );
}

export default Opportunities;
