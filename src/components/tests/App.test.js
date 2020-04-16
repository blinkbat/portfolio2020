


import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Nav from '../Nav';

describe( 'App component', () => {

    const component = shallow( <App /> );

    it( 'should render the Nav component', () => {

        // console.log( component.debug() );
        const sub = component.find( Nav );
        expect( sub.length ).toBe( 1 );

    })

    it( 'should render the container', () => {

        const container = component.find( '.container' );
        expect( container.length ).toBe( 1 );

    })

    it( 'should render the content with at least one child', () => {

        const content = component.find( '.content' );
        // exists() will check if any nodes are in the wrapper component
        expect( content.exists() ).toBe( true );

    })

    it( 'should render the footer', () => {

        const footer = component.find( '.footer' );
        expect( footer.length ).toBe( 1 );

    })

})