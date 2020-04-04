


import React, { useState } from 'react';

import Modal from './Modal';


const Design = () => {


    const [ modal, toggleModal ] = useState( false );
    const [ modalInfo, setModal ] = useState({ title: '', img: '' })


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



    const showModal = ( title, img ) => {

        // do nothing on mobile, corresponds to css breakpt
        if( window.innerWidth > 1024 ) {

            setModal({ title, img });
            toggleModal( !modal );

        }

    }



    return( 
        <div style={{ background: '', padding: '50px 3%' }}>
            <h1>design</h1>
            <br />
            <p>
                I'm a visual thinker and love to create images &amp; designs. Check out some of my favorite pieces below. The best way to keep up with my work is by following my <a href="https://instagram.com/dbennettart" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>

            <section className="mosaic">

                { tempImgs.map( ( img, index ) => {

                    // TODO: make these cool modals or something

                   return( 
                        <div key={ index } onClick={ () => { showModal( 'testing', img ) } }>
                            <img src={ img } alt={ `gallery${ index }` } />
                        </div>
                        
                    );

                }) }

            </section>

            { modal ? 
                <Modal 
                    onDismiss={ toggleModal } 
                    modalState={ modal } 
                    title={ modalInfo.title }
                    img={ modalInfo.img }
                /> 
            : '' }

        </div>

    );

}

export default Design;