import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwitterTimelineEmbed } from 'react-twitter-embed';



function twitterPost() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row >
                    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
                        Latest News Updates from <span className="green">Posadas Lab</span>
                    </h1>
                </Row>
                <Row >
                    <Col md={6} className="home-about-description" style={{ textAlign: "left" }}>
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Twitter Acount <strong className="green">@briposadas</strong>
                        </h1>
                        <div className="centerContent">
                            <div className="selfCenter spaceBetween">
                                <TwitterTimelineEmbed
                                    onLoad={function noRefCheck() { }}
                                    options={{
                                        height: 800
                                    }}
                                    screenName="briposadas"
                                    sourceType="profile"
                                    tweetLimit={10}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="home-about-description" style={{ textAlign: "left" }}>
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Twitter Acount <strong className="green">@CHCI_VT</strong>
                        </h1>
                        <div className="centerContent">
                            <div className="selfCenter spaceBetween">
                                <TwitterTimelineEmbed
                                    onLoad={function noRefCheck() { }}
                                    options={{
                                        height: 800
                                    }}
                                    screenName="CHCI_VT"
                                    sourceType="profile"
                                    tweetLimit={10}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default twitterPost;
