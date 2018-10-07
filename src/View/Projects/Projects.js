import React, { Component } from 'react';
import {Grid, Col, Row, Image, Carousel} from 'react-bootstrap';
import './Projects.css';

import github from "../../Images/github-black.png"
import android from "../../Images/android.png"
import java from "../../Images/java.png"
import firebase from "../../Images/firebase.png"
import react from "../../Images/react.png"
import html from "../../Images/html.png"
import css from "../../Images/css.png"
import js from "../../Images/js.png"
import weka from "../../Images/weka.png"
import go from "../../Images/go.png"
import cloud from "../../Images/google.png"
import kotlin from "../../Images/kotlin.png"
import postgres from "../../Images/postgres.png"

import keesir from "../../Images/keesir.png"
import ecopet from "../../Images/ecopet.png"
import personal from "../../Images/personal.png"
import agriext from "../../Images/agriext.png"
import inotas from "../../Images/inotas.png"
import petsite from "../../Images/petsite.png"

const projects = {
    keesir:{
        img: keesir,
        title: "Keesir App",
        description: "Keesir is an application that connects flexible and individual workers / entrepreneurs to customers seeking the best services in their location. We have as target audience two segments, the Client, the one who seeks in the application to find the perfect professional to solve their need, and the Worker, user who seeks in the application the exposure of their activities, ability and services as a goal to reach an audience greater and consequently greater financial return for their work. This project is currently participating in the startup acceleration program of the government of Ceará.",
        link:"private project",
        tech:[github, android, java, firebase]
    },
    inotas:{
        img: inotas,
        title: "INotas",
        description: "Inotas is an application developed to help merchants to store their purchase data from the Electronic Invoice issued by the government. The application is in the process of development, searching from the data of a merchant's purchase, informing him where his biggest expenses are being, which suppliers have the lowest price, which products have increased the value in a given time and among other services. The application is being developed with Golang as BackEnd, PostegreSQL as database and Android mobile application using Kotlin.",
        link:"https://github.com/wiltonribeiro/inotas-back",
        tech:[github, cloud, go, postgres, kotlin, android]
    },
    ecopet:{
        img: ecopet,
        title: "EcoPET",
        description: "The EcoPet is a contest that aims to bring to the Federal University of Ceará - Quixadá Campus, sustainable practices that instill students and educators in projects related to the preservation of the environment, seeking new practices of ecological mobilization within the university, so the awareness and preservation of the environment are strongly discussed among the academic community. The application counts as a social network for the publication of photos with ecological appeal. Users who get the most tanned in their photos by the end of a tag's date (eg #diadaagua) are awarded.",
        link:"https://github.com/wiltonribeiro/ecoPET",
        tech:[github, android, java, firebase]
    },
    peronal:{
        img: personal,
        title: "My Website",
        description: "Hello, as you have seen this is my personal website. All my projects have been shown here so far. This entire site was built with ReactJS.",
        link:"https://github.com/wiltonribeiro/wiltonribeiro.github.io-react",
        tech:[github,html,css,js,react]
    },
    agriext:{
        img: agriext,
        title: "AgriExt Mobile",
        description: "AgriExt is a project of the Federal University of Ceará that seeks to help local farmers save water in their plantations by accurately measuring how much water is needed for each type of planting. The application utilizes machine learning, weather station data collection and design principles supported for low literacy people, using color, representative icons and audio description for each application process and on-screen text.",
        link:"https://github.com/wiltonribeiro/agriext-mobile",
        tech:[github, android, java, weka]
    },
    petsite:{
        img: petsite,
        title: "PET - TI Website",
        description: "I am a member of PET - TI at the Federal University of Ceará. This site was developed with the purpose of helping students of the university to know what the PET group does inside and outside the university. The site was developed using ReactJS.",
        link:"https://github.com/wiltonribeiro/petti-website",
        tech:[github,html,css,js,react]
    }
};

class Projects extends Component {

    loadTech = (techs) =>{
        let content = [];
        techs.forEach((item, i)=>{
          content.push(
              <img key={i} src={item} width={40} />
          )
        });

        return content;
    };


    loadProjects = () => {
        let content = [];
        const keys = Object.keys(projects);
        keys.forEach((item, i)=>{
            let project = projects[item];
            content.push(
                <Carousel.Item key={i}>
                    <Grid>
                        <Row>
                            <Col xsHidden sm={12} md={6}>
                                <center><Image style={{maxHeight: 400}} rounded responsive src={project.img} /></center>
                            </Col>

                            <Col sm={12} md={6}>
                                <p className="about-title-text"><b>{project.title}</b><br/>
                                    <hr style={{border:"5px solid #333333", borderRadius:4, marginRight:"90%"}}/>
                                </p>
                                <p className="about-content-text">
                                    {project.description}
                                    <br/>(<span>{project.link}</span>)
                                </p>
                                <p className="project-img-tech">
                                    {this.loadTech(project.tech)}
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </Carousel.Item>
            )
        });
        return content;
    };

    render() {
        return (
            <div className="projects-grid" id="projects">
                    <Carousel controls={false} className="projects-carousel" indicators>
                        {this.loadProjects()}
                    </Carousel>;

            </div>
        );
    }
}



export default Projects;
