


import React, { useState } from 'react';

import Modal from './Modal';

import designData from './designData';

const Design = () => {

    // state handlers
    const [ modal, toggleModal ] = useState( false );
    const [ modalInfo, setModal ] = useState({ title: '', img: '' });



    // helpers
    const showModal = ( title, img ) => {

        // do nothing on mobile, corresponds to css breakpt
        if( window.innerWidth >= 768 ) {

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

    // const shuffleArray = arr => {
    //     for ( let i = arr.length - 1; i > 0; i--) {
    //         const j = Math.floor( Math.random() * (i + 1) );
    //         [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
    //     }
    //     return arr;
    // }
    //
    // imgs = shuffleArray( imgs );



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

                { designData.map( ( item, index ) => {

                   return( 

                        <div key={ index } onClick={ () => { showModal( item.title, item.img ) } }>
                            <img src={ item.img } alt={ item.title } />
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