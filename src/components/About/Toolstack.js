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
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Atom">
        <SiAtom />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Eclipse IDE">
      <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Xamp">
      <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Salesforce">
      < SiSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Amazon AWS">
      <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
      <SiGooglecloud />
      </Col>
    </Row>
  );
}

export default Toolstack;
