import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiWindows,
  SiEclipseide,
  SiXampp,
  SiSalesforce,
  SiAmazonaws,
  SiGooglecloud,
  SiAtom
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      < SiSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGooglecloud />
      </Col>
    </Row>
  );
}

export default Toolstack;
