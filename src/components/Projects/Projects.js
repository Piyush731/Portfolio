import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import ERP from "../../Assets/Projects/ERP.PNG";
import CareerCraft from "../../Assets/Projects/CareerCraft.PNG";
import suicide from "../../Assets/Projects/suicide.png";
import Portfolio from "../../Assets/Projects/Portfolio.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CareerCraft}
              isBlog={false}
              title="CareerCraft"
              description="An ATS (Applicant Tracking System) Optimized Resume Analyzer, This innovative system empowers job seekers by providing valuable insights into their resumes'
               compatibility with job descriptions, identifying missing keywords, and offering tailored profile summaries."
              ghLink="https://github.com/Piyush731/ATS-optimized-resume-analyzer-using-gemini-model/"
              demoLink="https://ats-optimized-resume-analyzer-using.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="Showcasing my work as Piyush Kasyap, this portfolio highlights my GitHub projects, resume, and technical skills, demonstrating my passion for software development. Built with React.js, Node.js, and Express.js, and styled with CSS3, it reflects my commitment and expertise in crafting innovative web solutions."
              ghLink="https://github.com/Piyush731/Portfolio"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERP}
              isBlog={false}
              title="Enterprise resource planning Management System"
              description="An ERP management system that enables admin users to add, view, and remove student and faculty records, while student users can access their own information and updates"
              ghLink="https://github.com/Piyush731/ERP-Management-System"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
