


import React from 'react';
import { shallow } from 'enzyme';

import Contact from '../Contact';

describe( 'Contact component', () => {

    it( 'should render the form', () => {

        const component = shallow( <Contact /> );
        // console.log( component.debug() );
        const form = component.find( '[data-test="form"]' );
        expect( form.length ).toBe( 1 );

    })

    it( 'should have an email input in form', () => {

        const component = shallow( <Contact /> );
        // console.log( component.debug() );
        const form = component.find( '[data-test="form"]' );
        const email = form.find( 'input[type="submit"]' );
        expect( email.length ).toBe( 1 );

    })



})