import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about-grid">
                <Row>
                    <Col sm={12} md={6}>
                        <p className="about-title-text"><b>About</b> me <br/>
                            <hr style={{border:"5px solid white", borderRadius:4, marginRight:"90%"}}/>
                        </p>
                        <p className="about-content-text">
                            Passionate about software development and usability.
                            I currently have skills with Native Android Development using Java and Kotlin.
                            To web development I currently have knowledge about FrontEnd using technologies like: HTML, CSS, JS, React.js,
                            to BackEnd development i also have experience with Node.js and Golang.
                            Some tools that I've already work with are Firebase and Google Cloud.
                            I am graduating Software Engineering from the Federal University of Ceará.
                            Well, I'm glad that you know me. Now let me know you...
                        </p>
                    </Col>
                    <Col sm={12} md={6}/>
                </Row>
            </div>
        );
    }
}



export default About;
