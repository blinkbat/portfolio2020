


import React, { useState } from 'react';



const Contact = () => {

    const [ formInfo, setInfo ] = useState({ email: '', message: '' })

    const handleInput = e => {
        const { name, value } = e.target
        setInfo({ ...formInfo, [name]: value })
    }

    return( 
        <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526554850534-7c78330d5f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")' }} className="pageBg">
            <h1>contact</h1>
            <br />
            <p>I love hearing from the internet. Reach out to me below.</p>
            <br /><br />

            <p>

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
                    onClick={ () => {

                        console.log( 'Submitting...', formInfo );

                    } }
                />

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