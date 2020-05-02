


import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {

    // state handlers
    const [ formInfo, setInfo ] = useState({ email: '', name: '', message: '' });
    const [ feedback, setFeedback ] = useState( '' )

    // helpers

    // note that the target iterator is generic -- don't change
    const handleInput = event => {
        const { name, value } = event.target;
        setInfo({ ...formInfo, [name]: value });
    }

    const handleFormSubmit = () => {

        const { email, name, message } = formInfo;

        if(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test( email )
            && message
            && name
        ) {
            // valid input
            setFeedback( 'sending' );

            axios
                .post( 'api/contact', formInfo )
                .then( res => {
                    
                    setInfo({ email: '', name: '', message: '' });
                    setFeedback( 'success' );
                    return res;
                    
                })
                .catch( err => console.log( err ) );

        } else {
            // validation err
            setFeedback( 'invalid' );
        }

    }

    const renderFeedback = () => {

        if( feedback === 'success' ) {
            return <code style={{ color: 'lightgreen' }}>message sent!</code>

        } else if( feedback === 'sending' ) {
            return <code style={{ color: 'lightgray' }}>sending...</code>

        } else if( feedback === 'invalid' ) {
            return <code style={{ color: '#ff957a' }}>one or more fields invalid.</code>

        }

    }


    
    const bgImg = require( '../images/bg-contact.jpg' );

    // render
    return( 

        <div style={{ backgroundImage: `url(${ bgImg })` }} className="pageBg">
            <h1>contact</h1>
            <br />
            <p>I love hearing from the internet. Reach out to me below.</p>
            <br /><br />

            <p data-test="form" className="form">

                <input 
                    name="email"
                    type="text" 
                    placeholder="your email (required)" 
                    value={ formInfo.email } 
                    onChange={ handleInput }
                    style={{ marginRight: '20px' }}
                />
                <br className="desktopHide" /><br className="desktopHide" />

                <input
                    name="name"
                    type="text"
                    placeholder="your name (required)"
                    value={ formInfo.name }
                    onChange={ handleInput }
                />
                <br /><br />

                <textarea 
                    name="message"
                    placeholder="your message (required)" 
                    rows="8" 
                    value={ formInfo.message }
                    onChange={ handleInput }
                />
                <br /><br />

                <input 
                    type="submit" 
                    value="send it" 
                    onClick={ handleFormSubmit }
                />
                <br /><br />

                { renderFeedback() }

            </p>
            <br /><br />

            <p className="social">
                <a href="https://github.com/blinkbat/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i> github
                </a>
                &nbsp;&middot;&nbsp;

                <a href="https://instagram.com/dbennettart/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i> instagram
                </a>
                &nbsp;&middot;&nbsp;

                <a href="https://www.linkedin.com/in/david-bennett-123012ba/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i> linkedin
                </a>
            </p>

        </div>

    );

}

export default Contact;