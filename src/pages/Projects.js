import React from "react"
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col.js"
import ResumeButton from "../components/ResumeButton.js"
import '../App.css';
import UMEWE from "../images/UMEWE.png"
import OutOfOffice from "../images/outofoffice.png"
import EatDaBurger from "../images/burger.png"
import WorkDayPlanner from "../images/planner.png"
import Resume from "../images/Coding-Resume.pdf"
import Quiz from "../images/quiz.png"
import Weather from "../images/weather.png"

function Projects() {
    return (
       <div ClassName = "body">
          <section id="project">
              <Container>
      <Row>
        <Col size="sm-12" ClassName="portfolio">
          <p><span className="slide-right-font"> Projects </span></p>
          <div>
          <a src={Resume} target="_blank" class="resumeLink">
        <button type="button" className="btn btn-dark btn">View Resume</button>
      </a>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-6" ClassName="portfolio">
        <img src={UMEWE} ClassName="slide-in from-left photo" id="selfie-project-photos"  alt="thubnail"/>
        </Col>
        <Col size="sm-6" ClassName="portfolio">
          <p><span ClassName="slide-right-font"> UMEWE </span></p>
          <p ClassName="about-section-font thumbnail-margin">
            Whether you’re looking to meet a friend, family member, or even a date, UMEWE will find the midway point
            between two different locations and display a list of 10 restaurants within that radius. </p>
          </Col>
          <Row id="button-row">
          <Col size="sm-6"><br></br>
              <a href="https://github.com/oxfordblucher/Restaurant-Roulette" target="_blank">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">GitHub</button>
              </a>
              <a href="https://oxfordblucher.github.io/Restaurant-Roulette/" target="_blank" ClassName="resumeLink">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">Deployed App</button>
              </a>
            </Col>
          </Row>
        
      </Row>

      <Row>
        <Col size="sm-6" ClassName="portfolio">
        <img src={OutOfOffice} ClassName="slide-in from-left photo" id="selfie-project-photos"  alt="thubnail"/>
        </Col>
        <Col size="sm-6" ClassName="portfolio">
          <p><span ClassName="slide-right-font"> Out-Of-Office  </span></p>
          <p ClassName="slide-in from-right about-section-font thumbnail-margin">
          Out of Office enables employees to create a post for an after-work event. Other employees can search, join, or create events. </p>
          </Col>
          <Row id="button-row">
          <Col size="sm-6"><br></br>
              <a href="https://github.com/Alexandra-Hionis/Out-Of-Office" target="_blank">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">GitHub</button>
              </a>
              <a href="https://out-of-office1.herokuapp.com/" target="_blank" ClassName="resumeLink">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">Deployed App</button>
              </a>
            </Col>
          </Row>
        
      </Row>

      <Row>
        <Col size="sm-6" ClassName="portfolio">
        <img src={EatDaBurger} ClassName="slide-in from-left photo" id="selfie-project-photos"  alt="thubnail"/>
        </Col>
        <Col size="sm-6" ClassName="portfolio">
          <p><span ClassName="slide-right-font"> Eat-Da-Burger  </span></p>
          <p ClassName="slide-in from-right about-section-font thumbnail-margin">
          Eat-Da-Burger! is a restaurant application that lets users input the names of burgers they'd like to eat. You can add, devour and delete it. </p>
          </Col>
          <Row id="button-row">
          <Col size="sm-6"><br></br>
              <a href="https://github.com/Alexandra-Hionis/Eat-Da-Burger" target="_blank">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">GitHub</button>
              </a>
              <a href="https://salty-brook-22385.herokuapp.com/" target="_blank" ClassName="resumeLink">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">Deployed App</button>
              </a>
            </Col>
          </Row>
        
      </Row>

      <Row>
        <Col size="sm-6" ClassName="portfolio">
        <img src={WorkDayPlanner } ClassName="slide-in from-left photo" id="selfie-project-photos"  alt="thubnail"/>
        </Col>
        <Col size="sm-6" ClassName="portfolio">
          <p><span ClassName="slide-right-font"> Work Day Planner  </span></p>
          <p ClassName="slide-in from-right about-section-font thumbnail-margin">
          A simple calendar application that allows a user to save events for each hour of the day.
          </p>
          </Col>
          <Row id="button-row">
          <Col size="sm-6"><br></br>
              <a href="https://github.com/Alexandra-Hionis/Daily-Work-Planner" target="_blank">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">GitHub</button>
              </a>
              <a href="https://alexandra-hionis.github.io/Daily-Work-Planner/" target="_blank" ClassName="resumeLink">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">Deployed App</button>
              </a>
            </Col>
          </Row>

          
        
      </Row>

      <Row>
        <Col size="sm-6" ClassName="portfolio">
        <img src={Quiz} ClassName="slide-in from-left photo" id="selfie-project-photos"  alt="thubnail"/>
        </Col>
        <Col size="sm-6" ClassName="portfolio">
          <p><span ClassName="slide-right-font">Javascript Quiz</span></p>
          <p ClassName="slide-in from-right about-section-font thumbnail-margin">
          A timed code quiz with multiple-choice questions that tests your knowledge on JavaScript
            questions.
          </p>
          </Col>
          <Row id="button-row">
          <Col size="sm-6"><br></br>
              <a href="https://github.com/Alexandra-Hionis/JavaScript-Quiz" target="_blank">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">GitHub</button>
              </a>
              <a href="https://alexandra-hionis.github.io/JavaScript-Quiz/" target="_blank" ClassName="resumeLink">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">Deployed App</button>
              </a>
            </Col>
          </Row>

          
        
      </Row>

      <Row>
        <Col size="sm-6" ClassName="portfolio">
        <img src={Weather} ClassName="slide-in from-left photo" id="selfie-project-photos"  alt="thubnail"/>
        </Col>
        <Col size="sm-6" ClassName="portfolio">
          <p><span ClassName="slide-right-font">What's Up Weather</span></p>
          <p ClassName="slide-in from-right about-section-font thumbnail-margin">
          Weather application that allows a user to search for a city and get the current weather and 5 day forecast.
          </p>
          </Col>
          <Row id="button-row">
          <Col size="sm-6"><br></br>
              <a href="https://github.com/Alexandra-Hionis/Weather-Dashboard" target="_blank">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">GitHub</button>
              </a>
              <a href="https://alexandra-hionis.github.io/Weather-Dashboard/" target="_blank" ClassName="resumeLink">
                <button type="button" ClassName="btn btn-dark btn-space btn-sm">Deployed App</button>
              </a>
            </Col>
          </Row>

          
        
      </Row>
      </Container>
</section>
</div>
    );
}

export default Projects
















