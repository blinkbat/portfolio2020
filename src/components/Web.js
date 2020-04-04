


import React from 'react';



const Web = () => {

    const webData = [

        { 
            img: require( '../images/ME-big.png' ),
            name: 'Manhattan Eye', 
            descrip: 'A comprehensive site for NYC-based opthamologist Yuna Rapoport, with information on her practice and medical knowledge for the public. Built with WordPress and Elementor.',
            link: 'https://manhattaneyenyc.com'
        },
        { 
            img: require( '../images/HS-big.png' ),
            name: 'Haddad & Sherwin', 
            descrip: 'Haddad & Sherwin is a legal team based in San Francisco that\'s serious about social justice, police brutality, LGBTQ rights, and more. Built with WordPress.',
            link: 'https://haddadandsherwin.com'
        },
        { 
            img: require( '../images/PR-big.png' ),
            name: 'Pure Relief Quiz', 
            descrip: 'A jQuery-built quiz to help customers pick out the best CBD products from natural retailer Pure Relief.',
            link: 'https://purerelief.com/myreliefcbdquiz'
        },
        { 
            img: require( '../images/MC-big.png' ),
            name: 'Montejo Consulting', 
            descrip: 'Karin Montejo has had a storied history as a police chief, and now uses her expertise to guide policewomen towards success in their careers. Built with WordPress.',
            link: 'http://montejoconsulting.com'
        },
        { 
            img: require( '../images/ME-big.png' ),
            name: 'Messenger Node App', 
            descrip: 'A Node.js script to parse various Messenger inboxes of a given user, and write key data points out to CSV format for easy analysis.',
            link: ''
        },
        { 
            img: require( '../images/PM-big.png' ),
            name: 'Project Maia', 
            descrip: 'Project Maia was a fun excercise in using data-driven algorithms to give advice and feedback about companies\' social media strategy.',
            link: ''
        },
        { 
            img: require( '../images/GC-big.png' ),
            name: 'General Real Estate Corp.', 
            descrip: 'A site showcasing the diverse developments of one of the biggest real estate investment companies in South Florida. Built with WordPress.',
            link: 'http://greccorp.com'
        }

    ];


    return( 
        <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80")' }} className="pageBg">
            <h1>web</h1>
            <br />
            <p>
                My passion for the 'net (we really used to call it that) helps me strive to create beautiful designs, intuitive UIs, great user experiences, delightfully clean code, and lightning-fast response times.

                <br /><br />

                The site you're oglin' right now was created with next-generation technologies like React.js, Node.js, SCSS, semantic HTML5, and more.

                <br /><br />

                Below, check out some of my web dev work.&nbsp;
                <span style={{ fontStyle: 'italic', opacity: '.5' }}>Scroll thattaway! &rarr;</span>
            </p>

            <ul className="rightScroll">

                { webData.map( ( site, index ) => {

                     // TODO: EXTRACT TO OWN WEB BOX COMPONENT? maybe a lightbox?
                     // TODO: nice fade effect on right side of scrollbox?
                     // ADD: CSTA

                    return(

                        <li className="webBox" key={ index }>
                            
                            <h3>{ site.name }</h3>
                            
                            <div 
                                className="webBoxImg"
                                style={{ backgroundImage: `url( ${ site.img } )` }} 
                            ></div>

                            <br />

                            { site.descrip }

                            <br />

                            { site.link ?
                                <a href={ site.link } target="_blank" rel="noopener noreferrer">
                                    Visit &rarr;
                                </a>
                            : '' }

                        </li>

                    );

                }) }

            </ul>

        </div>
    );

}

export default Web;