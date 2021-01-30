import React from "react"
import Row from "../components/Row.js"
import Col from "../components/Col.js"
import ResumeButton from "../components/ResumeButton.js"
import '../App.css';
import Me from "../images/me.jpg"

function Projects() {
    return (
       <div className = "body">
          <section id="project">
      <Row>
        <Col size="sm-12" className="portfolio">
          <p><span className="slide-right-font"> Projects </span></p>
          <ResumeButton />
        </Col>
      </Row>
</section>
</div>
    );
}

export default Projects
















