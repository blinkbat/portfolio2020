


import React, { useState } from 'react';

import Modal from './Modal';


const Design = () => {

    // state handlers
    const [ modal, toggleModal ] = useState( false );
    const [ modalInfo, setModal ] = useState({ title: '', img: '' })



    // data
    const tempImgs = [
        'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1585662634386-6c160dfda393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1562887189-4b6edf71d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585662634386-6c160dfda393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1562887189-4b6edf71d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1562887189-4b6edf71d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585662634386-6c160dfda393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1585662634386-6c160dfda393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1562887189-4b6edf71d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585662634386-6c160dfda393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1562887189-4b6edf71d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1562887189-4b6edf71d847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585662634386-6c160dfda393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    ]



    // helpers
    const showModal = ( title, img ) => {

        // do nothing on mobile, corresponds to css breakpt
        if( window.innerWidth > 1200 ) {

            setModal({ title, img });
            toggleModal( !modal );

            // prevent background scroll while modal is open
            const body = document.body.style;

            body.height ? body.height = '' : body.height = '100vh';
            body.overflowY ? body.overflowY = '' : body.overflowY = 'hidden';
            body.paddingRight ? body.paddingRight = '' : body.paddingRight = '17px';

        }

    }

    const bgImg = require( '../images/bg-design.jpg' );



    // render
    return( 

        // IDEA: maybe a random gradient color top right for pageBg

        <div style={{ backgroundImage: `url(${ bgImg })` }} className="pageBg">

            <h1>design</h1>
            <br />
            <p>
                I'm a visual thinker and love to create images &amp; designs. Check out some of my favorite pieces below. The best way to keep up with my work is by following my <a href="https://instagram.com/dbennettart" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>

            <section className="mosaic">

                { tempImgs.map( ( img, index ) => {

                   return( 

                        <div key={ index } onClick={ () => { showModal( 'testing', img ) } }>
                            <img src={ img } alt={ `gallery${ index }` } />
                        </div>
                        
                    );

                }) }

            </section>

            { modal ? // conditional rendering of modal via state
                <Modal 
                    onDismiss={ showModal } 
                    modalState={ modal } 
                    title={ modalInfo.title }
                    img={ modalInfo.img }
                /> 
            : '' }

        </div>

    );

}

export default Design;