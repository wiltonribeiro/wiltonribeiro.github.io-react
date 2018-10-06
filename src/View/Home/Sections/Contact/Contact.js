import React, { Component } from 'react';
import Github from '../../../../Images/github.png'
import Google from '../../../../Images/google-plus.png'
import LinkedIn from '../../../../Images/linkedin.png'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-grid">
                <p>
                    <img src={Github} width={40} />
                    <span>www.github.com/wiltonribeiro</span>
                </p>

                <p>
                    <img src={Google} width={40} />
                    <span>willrcneto@gmail.com</span>
                </p>

                <p>
                    <img src={LinkedIn} width={40} />
                    <span>www.linkedin.com/in/wiltonribeiro</span>
                </p>
            </div>
        );
    }
}



export default Contact;
