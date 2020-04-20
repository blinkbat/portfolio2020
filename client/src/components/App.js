


import React from 'react';

import Nav from './Nav';



const App = ({ children }) => {

    const year = new Date().getFullYear();

    return (
        <div className="app">
            
            <Nav />
            
            <div className="container">

                <section className="content">
                    { children }
                </section>

                <footer className="footer">
                        &copy; { year } &middot; made with&nbsp;
                        <span style={{ color: '#ff957a' }}>&hearts;</span> in Miami
                </footer>

            </div>

        </div>
    );
}

export default App;