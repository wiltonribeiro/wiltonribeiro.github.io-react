import React, { Component } from 'react';
import {Grid, Button} from 'react-bootstrap';
import './Home.css';
import Typist from 'react-typist';

class Home extends Component {
    render() {
        return (
            <Grid className="home-grid">
                <Grid className="home-welcome-grid">
                    <p className="home-welcome-text-big"><Typist cursor={{hideWhenDone: true }}><b>Hello</b>, I'm Wilton</Typist></p>
                    <p className="home-welcome-text-small">Software Engineer student and Freelancer Developer</p>
                    <Button className="home-see-button">SEE MORE</Button>
                </Grid>
            </Grid>
        );
    }
}



export default Home;
