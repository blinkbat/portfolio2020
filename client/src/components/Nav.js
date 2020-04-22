


import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const Nav = () => {

    const [ mobileMenu, toggleMobile ] = useState( false );

    return( 
        
        <nav className="nav">

            <Link 
                to="/" 
                onClick={ () => { toggleMobile( false ) } }
            ><h2>david a. bennett</h2></Link>

            <i 
                className="fa fa-bars hamburger"
                onClick={ () => { toggleMobile( !mobileMenu ) } }
            ></i>

            <ul 
                className={ mobileMenu ? "" : "mobileHide" } 
                onClick={ () => { toggleMobile( !mobileMenu ) } }
            >
                <Link to="/"><li>blog</li></Link>
                <Link to="/web"><li>web</li></Link>
                <Link to="/design"><li>design</li></Link>
                <Link to="/writing"><li>writing</li></Link>
                <Link to="/cv"><li>cv</li></Link>
                <Link to="/contact"><li>contact</li></Link>
            </ul>

        </nav>
    );

}

export default Nav;