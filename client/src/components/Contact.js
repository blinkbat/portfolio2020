


import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {

    // state handlers
    const [ formInfo, setInfo ] = useState({ email: '', message: '' });

    const [ feedback, setFeedback ] = useState({ feedback: '' })



    // helpers
    const handleInput = e => {
        const { name, value } = e.target;
        setInfo({ ...formInfo, [name]: value });
    }

    const bgImg = require( '../images/bg-contact.jpg' );

    const handleFormSubmit = () => {

        const { email, message } = formInfo;

        if(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test( email )
            && message
        ) {

            // valid input
            axios
                .post( 'api/contact', { email, message } )
                .then( res => {
                    
                    setInfo({ email: '', message: '' });
                    setFeedback({ feedback: 'success' });
                    return res;
                })
                .catch( err => console.log( err ) );

        } else {
            // validation err
            setFeedback({ feedback: 'invalid' });

        }

    }

    renderFeedback() {
        if( feedback === 'success' ) {
            return <br /><span style={{ color: 'lightgreen' }}>Email sent!</span>;
        
        } else if( feedback === 'invalid' ) {
            return <br /><span style={{ color: 'red' }}>One or more fields invalid.</span>;

        }
    }


    // render
    return( 
        <div style={{ backgroundImage: `url(${ bgImg })` }} className="pageBg">
            <h1>contact</h1>
            <br />
            <p>I love hearing from the internet. Reach out to me below.</p>
            <br /><br />

            <p data-test="form">

                <input 
                    name="email"
                    type="text" 
                    placeholder="your email (required)" 
                    value={ formInfo.email } 
                    onChange={ handleInput }
                />
                <br /><br />

                <textarea 
                    name="message"
                    placeholder="your message (required)" 
                    rows="8" style={{ width: "600px" }} 
                    value={ formInfo.message }
                    onChange={ handleInput }
                />
                <br /><br />

                <input 
                    type="submit" 
                    value="send it" 
                    onClick={ handleFormSubmit }
                />
                <br />

                { renderFeedback() }

            </p>
            <br /><br />

            <p>
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