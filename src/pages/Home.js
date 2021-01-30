import React from "react"
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col.js"
import '../App.css';
import Portrait from "../images/portrait.png"
function Home() {
    return (

       <div className = "body">
           <section id="home">
            <Container>
           <Row>
               <Col size="sm-1"></Col>
               <Col size="sm-5">
                <div id="name-div">
                    <p className="home-font">Hello! My name is</p>
                    <p id="home-name">Alexandra <br></br> Hionis </p>
                    <p className="home-font">I make designs come to <span className="typewriter">life.</span></p>
                </div>
               </Col>
               <Col size="sm-5">
                <div id="portrait-div">
                <img src={Portrait} id="portrait" alt="me"/>
                   
                </div>
               </Col>
               <Col size="sm-1"></Col>
           </Row>
           </Container>
           </section>
       </div>
    );
}

export default Home