


import React from 'react';

import writingData from './writingData';


const Writing = () => {

    const bgImg = require( '../images/bg-writing.jpg' );

    return( 
        <div style={{ backgroundImage: `url(${ bgImg })` }} className="pageBg">
            <h1>writing</h1>
            <br />
            <p>
                I love to think critically about arts &amp; culture. Sometimes I put it into writing for publications like the Miami New Times. Read up on some of my articles below.
            </p>

            <ul className="articles">

                { writingData.map( ( article, index ) => {

                    return(
                        <li className="articleBox" key={ index }>

                            <div 
                                className="articleImg"
                                style={{ backgroundImage: `url(${ article.img })` }} 
                            />

                            <br />

                            <h3>{ article.name }</h3>

                            <div>
                                { article.desc }
                                <br />
                                <a href={ article.link } target="_blank" rel="noopener noreferrer">
                                    Read &rarr;
                                </a>
                            </div>

                        </li>
                    );

                }) }

            </ul>

        </div>
    );

}

export default Writing;