import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./Workcards";
import Particle from "../Particle";
import Salesforce from "../../Assets/Experience/salesforce.PNG";

function Work() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here is an overview of my professional experience and educational background, highlighting the roles and responsibilities I have undertaken and the skills I have developed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={15} className="project-card">
            <WorkCard
              imgPath={Salesforce}
              isBlog={false}
              title="SalesForce Virtual Internship"q
              description={
                "◦ Role: Salesforce Developer.\n" +
                "◦ Key Skills : Salesforce, Apex Testing and Debugging, Visualforce/Lightning Web Components, SQL" +
                "◦ ◦ Completed a 8 week program hands on experience in Salesforce development and earning super \n"+
                "Badges in Apex, Process Automation, and Developer Superset."
              }
  
              ghLink="https://github.com/Piyush731/ATS-optimized-resume-analyzer-using-gemini-model/"
              demoLink="https://ats-optimized-resume-analyzer-using.onrender.com/"
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
