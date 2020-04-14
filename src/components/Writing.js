


import React from 'react';



const Writing = () => {

    const writingData = [
        {
            img: require( '../images/ME-big.png' ),
            name: 'International Noise Conference',
            desc: 'Lorem ipsum about INC, it happens at Churchill\'s Pub every February, a lot of people play music and get naked, lorem ipsum.',
            link: 'https://miaminewtimes.com'
        },
        {
            img: require( '../images/ME-big.png' ),
            name: 'International Noise Conference',
            desc: 'Lorem ipsusum.',
            link: 'https://miaminewtimes.com'
        },
        {
            img: require( '../images/ME-big.png' ),
            name: 'International Noise Conference',
            desc: 'Lorem ipsum about INC, it hfdgdfg dfg dfg dgh dfh dfhg dfdfh dfhg dfh dh dfgh dgh dfh dhd hdfh dfh d hdh appens at Churchill\'s Pub every February, a lot of people play music and get naked, lorem ipsum.',
            link: 'https://miaminewtimes.com'
        },
        {
            img: require( '../images/ME-big.png' ),
            name: 'International Noise Conference',
            desc: 'Lorem ipsum about INC, it happens at Chughjghj ghjghjghjghjghj rchill\'s Pudfgdfdfgdfgdfg b every February, a lot of people play music and get naked, lorem ipsum.',
            link: 'https://miaminewtimes.com'
        },
        {
            img: require( '../images/ME-big.png' ),
            name: 'International Noise Conference',
            desc: 'Lorem ipsum about INC, it happens at Churchill\'s Pub every February, a lot of people play music and get naked, lorem ipsum.',
            link: 'https://miaminewtimes.com'
        },
    ];

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

                            <img src={ article.img } alt={ article.name } />

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