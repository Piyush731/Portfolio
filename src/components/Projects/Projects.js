import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictac from "../../Assets/Projects/tictac.png";
import ERP from "../../Assets/Projects/ERP.PNG";
import CareerCraft from "../../Assets/Projects/CareerCraft.PNG";
import ecommerce from "../../Assets/Projects/Ecommerce.png";
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
              demoLink="https://portfolio-mu-five-76.vercel.app/project"
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
              imgPath={tictac}
              isBlog={false}
              title="Tic-Tac-Toe"
              description=" This Python Tic Tac Toe game project is a classic implementation of the popular two-player game, developed using Python. The game allows two players to compete against each other on a 3x3 grid, where the objective is to align three of their symbols (either 'X' or 'O') in a row—horizontally, vertically, or diagonally."
              ghLink="https://github.com/Piyush731/tic-tac-toe"
              demoLink="https://tic-tac-toe-ntja.onrender.com/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E Commerce Store"
              description="An E commerce store, a platform where customers can browse and purchase products online. It typically includes features such as product listings, shopping carts, payment gateways, and order management systems. The store is built using various technologies such as HTML, CSS, JavaScript, and server-side programming languages like PHP."
              ghLink="https://github.com/Piyush731/Ecommerce-Store"
              demoLink="#"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
