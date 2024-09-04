import React from "react";
import { Col, Row} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg"; 
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3, 
} from "react-icons/di";
import { 
  SiPython,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++"> 
          <CgCPlusPlus /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        < DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        < DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        < SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col> 
    </Row>
  );
}

export default Techstack;
