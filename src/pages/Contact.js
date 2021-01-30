import React from "react"
import Container from "../components/Container.js"
// import Row from "../components/Row.js"
// import Col from "../components/Col.js"
import Form from "../components/Form.js"
import {Row, Col} from "react-bootstrap"
import '../App.css';
import ContactInfo from "../images/contact-info.png"
function Contact() {
    return (
       <div className = "body">
           <section id="contact">
           <Container>
        <Row>
        <Col size="sm-12" className="contact">
        <p><span className="contact-font"> Contact</span></p>
        <p className="small">Get in touch</p>
        </Col>
        </Row>
        <Row>
        <Col size="sm-6" className="contact">
            <div id="form-info">
              <Form />
            <div>
              <button type="button" className="btn btn-dark btn-sm">Send</button>
            </div>
          </div>
          <Col size="sm-6" classNameName="contact">
            <p><span className="about-font"> Let's Connect </span></p>
            <div id="contact-info-background">
            <img src={ContactInfo} className="photo" id="contact-img" alt="contact"/>
          
            </div>
          </Col>
        </Col>
        </Row>
        </Container>
           </section>

</div>
    );
}

export default Contact
