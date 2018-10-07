import React, { Component } from 'react';
import {Grid, Nav, NavItem, Tab, Row} from 'react-bootstrap';
import './Home.css';
import Typist from 'react-typist';
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Home extends Component {
    render() {
        return (
            <Grid className="home-grid">
                <Grid className="home-welcome-grid center-vertical">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="clearfix">
                            <Tab.Content animation>

                                <Tab.Pane eventKey="first">
                                    <p className="home-welcome-text-big"><Typist cursor={{hideWhenDone: true }}><b>Hello</b>, I'm Wilton</Typist></p>
                                    <p className="home-welcome-text-small">Software Engineer student and Freelancer Developer</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <About/>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Contact/>
                                </Tab.Pane>

                            </Tab.Content>

                            <Nav bsStyle="pills" activeKey={1}>
                                <NavItem className="home-see-button" eventKey="second">
                                    ABOUT ME
                                </NavItem>
                                <li role="presentation">
                                    <AnchorLink className="btn-projects"  href='#projects'>
                                        PROJECTS
                                    </AnchorLink>
                                </li>
                                <NavItem  className="home-see-button" eventKey="third">
                                    CONTACT ME
                                </NavItem>
                            </Nav>
                        </Row>
                    </Tab.Container>
                </Grid>
            </Grid>
        );
    }
}



export default Home;
