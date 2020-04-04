


import React from 'react';

import { Link } from 'react-router-dom';



const Nav = () => {

    return( 

        <nav className="nav">

            <Link to="/"><h2>david a. bennett</h2></Link>

            <ul>
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