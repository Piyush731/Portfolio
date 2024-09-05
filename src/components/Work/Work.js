import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./Workcards";
import Particle from "../Particle";
import Salesforce from "../../Assets/Experience/salesforce.PNG";
import GEHU from "../../Assets/Experience/gehu.jpg";

function Work() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience/Education </strong>
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
                <div>
                  <p>◦ Role: Salesforce Developer.</p>
                  <p>◦ Key Skills: Salesforce, Apex Testing and Debugging, Visualforce/Lightning Web Components, SQL.</p>
                  <p>◦ Completed an 8-week program with hands-on experience in Salesforce development, earning super badges in Apex, Process Automation, and Developer Superset.</p>
                </div>} 
              demoLink=" https://skillwallet.smartinter
nz.com/internships/salesforce_certificates/177db6acfe388526a4c7bff88e1feb15"
            /> 
          </Col>  
          <Col>
          <WorkCard
              imgPath={GEHU}
              isBlog={false}
              title="Bachleor of Technology in Computer Science"q
              description={
                <div>
                  <p>◦ Role: Student.</p>
                  <p>◦ Key Skills: Programming Languages, Data Structures and Algorithms, Software Engineering, Full Stack Web development, Database Management, Object-oriented Programming , Computer Organization and System Security.</p>
                  <p>◦ Pursuing an 4-Year program Major in Computer Science; Batch:-2021-2025.</p>
                </div>} 
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
