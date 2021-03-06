


import React from 'react';



const Cv = () => {

    const bgImg = require( '../images/bg-cv.jpg' );

    return( 
        <div style={{ backgroundImage: `url(${ bgImg })` }} className="pageBg">
            <h1>cv</h1>
            <br />
            <p>
                Full-stack web developer with a passion for elegant simplicity. My art and design background informs my coding practice, helping me translate ideas from stunning concepts into clean code. Looking to further my abilities and experience with modern web technologies like React, Node, TypeScript, Sass, WordPress core, and more.
            </p>
            <br /><br />

            <h3>SELECTED PROFESSIONAL EXPERIENCE</h3>
            <br />

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Nov 2018 – Current</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">Full-Stack Web Development Teaching Assistant, Trilogy Education, University of Miami, FL</span>
                    <br /><br /> 
                    Assisted students with a full-stack curriculum covering JavaScript with ES6, React with Redux, Express.js, Node.js, MySQL and Sequelize, MongoDB and Mongoose, HTML5, CSS3, jQuery, PHP with Laravel, HTTP &amp; MVC standards, web security, APIs, networking, basic CS, and more.
                </div>
            </div>

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Apr 2017 – Current</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">Full-Stack Web Developer, WebLift, Miami, FL</span>
                    <br /><br />   
                    &middot; Created a variety of applications for clients, including JavaScript-based splash pages, custom PHP buildouts, WordPress integrations, static landing pages, and more.
                    <br />
                    &middot; Maintained a range of existing client sites on various platforms, implemented analytics and ads, SEO and other optimizations.
                    <br />
                    &middot; Clients include:
                    <ul style={{ marginLeft: '1rem', listStyle: "none" }}>
                        <li><a href="https://dcpcontenthubs.com" target="_blank" rel="noopener noreferrer">
                            DCP Content Hubs
                        </a></li>
                        <li><a href="https://tennistrunk.com" target="_blank" rel="noopener noreferrer">
                            Tennis Trunk
                        </a></li>

                        <li><a href="https://wihs.org" target="_blank" rel="noopener noreferrer">
                            Washington International Horse Show
                        </a></li>

                        <li><a href="https://luxcombuilders.com" target="_blank" rel="noopener noreferrer">
                            Luxcom Builders
                        </a></li>

                        <li><a href="https://haddadandsherwin.com" target="_blank" rel="noopener noreferrer">
                            Haddad &amp; Sherwin
                        </a></li>

                        <li><a href="https://serverpronto.com" target="_blank" rel="noopener noreferrer">
                            ServerPronto
                        </a></li>
                    </ul>
                    ...and many more.
                </div>
            </div>

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Apr 2017 – Current</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">Freelance Full-Stack Web Developer, Miami, FL</span>
                    <br /><br />   
                    &middot; Development in ES6 JavaScript, HTML5 &amp; CSS3, Node.js, etc.
                    <br />
                    &middot; Clients include:
                    <ul style={{ marginLeft: '1rem', listStyle: "none" }}>
                        <li><a href="https://manhattaneyenyc.com" target="_blank" rel="noopener noreferrer">
                            Manhattan Eye
                        </a></li>
                        <li><a href="https://purerelief.com/myreliefcbdquiz" target="_blank" rel="noopener noreferrer">
                            Pure Relief
                        </a></li>
                        <li>Skyward Strategies</li>
                        <li><a href="https://montejoconsulting.com/" target="_blank" rel="noopener noreferrer">
                            Montejo Consulting
                        </a></li>

                        <li><a href="https://sparkandspark.com/" target="_blank" rel="noopener noreferrer">
                            Spark &amp; Spark
                        </a></li>
                        <li>TFC Marketing</li>
                        <li>Opportune Media</li>
                    </ul>
                    ...and many more.
                </div>
            </div>

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Jan 2014 – Current</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">Music &amp; Culture Contributor</span>
                    <br /><br />   
                    &middot; Art listings curator for the <a href="http://biscaynetimes.com/" target="_blank" rel="noopener noreferrer">Biscayne Times</a>.
                    <br />
                    &middot; Contributed dozens of culture articles ranging from music to fine art and beyond, as well as article illustrations, for publications like the <a href="https://www.miaminewtimes.com/" target="_blank" rel="noopener noreferrer">Miami New Times</a>, Kill Screen, Vice, and Artlurker.
                </div>
            </div>

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Jan 2013 – Apr 2017</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">Gallerist, Graphic Designer, and Web Developer, Etra Fine Art, Wynwood, Miami, FL</span>
                    <br /><br />   
                    Managed and curated a fine art gallery, designed ads, brochures, and other materials, maintained gallery web presence.
                </div>
            </div>
            <br /><br/>

            <h3>EDUCATION</h3>
            <br />

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Jan 2017 – Apr 2017</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">Wyncode Academy</span>
                    <br /><br />   
                    Full-Stack Web Development Intensive, Part-Time Cohort 1, Miami, FL
                </div>
            </div>

            <div className="flexCtr">
                <div className="col-1-3">
                    <h4>Aug 2006 – Jun 2010</h4>
                </div>
                <div className="col-2-3">
                    <span className="pinkTxt">New College of Florida</span>
                    <br /><br />   
                    BA, Area of Concentration in Art (Honors College of Florida), Sarasota, FL
                </div>
            </div>
            <br /><br/>

            <h3>SKILLSET</h3>
            <br />

            <div className="col-2-3">
                &middot; React 16 with Redux, Context, Hooks<br />
                &middot; JavaScript (ES6) with jQuery<br />
                &middot; PHP7 with Laravel<br />
                &middot; MySQL with Sequelize<br />
                &middot; MongoDB with Mongoose<br />
                &middot; IndexedDB with Dexie<br />
                &middot; HTML5 &amp; CSS3 with Sass<br />
                &middot; Ruby on Rails 5<br />
                &middot; Progressive Web Applications (PWAs)<br />
                &middot; Adobe Suite (Photoshop, Illustrator, InDesign, etc.)<br />
                &middot; Networking, DNS, etc.<br />
                &middot; SEO Optimization<br />
                &middot; Google Analytics, AdWords, Search Console, etc.<br />
                &middot; API Usage (Facebook Graph API, Google OAuth, etc.)<br />
                &middot; Digital video and animation (Final Cut Pro, Adobe After Effects)<br />
            </div>

        </div>
    );

}

export default Cv;