import React from "react"
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col.js"
import '../App.css';
import Me from "../images/me.jpg"

function About() {
    return (
       <div className = "body">
           <section id="about">
           <Container>
        <Row>
         
        <Col size="sm-12" className="about">
            <p><span className="slide-right-font"> About Me </span></p>
            <p className="small">Get to know me!</p>
          </Col>
          <Row>
            <div className="col about-section-font">
              <h3 className="about-section-header">Learner</h3>
              <p className="about-paragraphs">
                Recent graduate from Penn LPS Coding Bootcamp. Previously, I earned a bachelor's in Psychology with a
                minor in Business from Temple University. I started self-teaching myself code about a year ago and have
                fallen in love with it ever since.
              </p>
            </div>

            <div className="col about-section-font">
              <h3 className="about-section-header" id="word-wrap">Problem Solver</h3>
              <p className="about-paragraphs">
                My most vivid memories were when I would play Lego bricks with my brother as a child. I craved the ability to
                put sets together and the feeling of accomplishment when I did. Coding is not much different in this sense.</p>
            </div>
            <div className="col about-section-font">
              <h3 className="about-section-header">Dreamer</h3>
              <p className="about-paragraphs">
                My mind has no limits and I am a fan of the creative, the imagination, and even the impossible. I am a
                huge thinker and a curious person.
              </p>
            </div>
          </Row>
        </Row>
    
        <Row>
        <Col size="sm-6" className="about-photo-text-align">
        <img src={Me} id="selfie-project-photos" alt="image of me"/>
          </Col>
         <Col size="sm-6" className="about-photo-text-align">
            <p><span className="slide-right-font"> Web Developer</span></p>
            <p className="about-section-font thumbnail-margin">
              I am an aspiring full stack web developer, with focus on front end development. I love to study new code and
            to build a more intuitive user experience on the web. With each project, my aim is to best engage my
            audience for an impactful user experience, both visually and behind the scenes.</p>
            <p className="about-section-font thumbnail-margin">
              In my spare time I enjoy spending time with my girlfriend,
            family and friends. I enjoy cooking, kickboxing, photography, traveling and skiing. Aside from coding, another main
            goal of mine is real estate. I am a part of the LGBTQIA+ community, I follow women
            in tech and I am always open to new adventures!</p>
          </Col>
        </Row>
        </Container>
           </section>

</div>
    );
}

export default About
