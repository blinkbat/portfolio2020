


import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Nav from '../Nav';

describe( 'App component', () => {

    it( 'should render the Nav component', () => {

        const component = shallow( <App /> );
        // console.log( component.debug() );
        const sub = component.find( Nav );
        expect( sub.length ).toBe( 1 );

    })

    it( 'should render the container', () => {

        const component = shallow( <App /> );
        const container = component.find( '.container' );
        expect( container.length ).toBe( 1 );

    })

    it( 'should render the content with at least one child', () => {

        const component = shallow( <App /> );
        const content = component.find( '.content' );
        // exists() will check if any nodes are in the wrapper component
        expect( content.exists() ).toBe( true );

    })

    it( 'should render the footer', () => {

        const component = shallow( <App /> );
        const footer = component.find( '.footer' );
        expect( footer.length ).toBe( 1 );

    })

})