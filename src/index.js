


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';
import Web from './components/Web';
import Design from './components/Design';
import Writing from './components/Writing';
import Cv from './components/Cv';
import Contact from './components/Contact';

import './style.css';


ReactDOM.render( 

    <BrowserRouter>
        <App>
            <Switch>

                <Route path="/" component={ Welcome } exact />
                <Route path="/web" component={ Web } />
                <Route path="/design" component={ Design } />
                <Route path="/writing" component={ Writing } />
                <Route path="/cv" component={ Cv } />
                <Route path="/contact" component={ Contact } />
                <Route component={ Welcome } />
                
            </Switch>
        </App>
    </BrowserRouter>, 

    document.querySelector( '#root' )
    
);

