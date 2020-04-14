


import React from 'react';



const Welcome = () => {

    const bgImg = require( '../images/bg-welcome.jpg' );

    return( 
        <div style={{ backgroundImage: `url(${ bgImg })` }} className="pageBg">
            <h1>hello world</h1>
            <br />

            <h3 style={{ display: "inline-block" }}>Getting Hooked on React Hooks</h3>&nbsp;
            <small>April 4 2020</small>
            <br /><br />
            <p>
                For my inaugural blog post, I'd like to detail some of the trials, tribulations, and outright fun I had spinning up this portfolio site for myself from scratch. I was determined to write the least amount of bloat code for my components that I could andto spin up all of my CSS styling for complete control.
                <br /><br />
                I knew that functional React components are more lightweight than their class-based peers. Challenging myself to build a React app using purely functional components, I stumbled on several issues related to the Hooks API. I had to brush up on my knowledge of <code>useState()</code> and reacquiant myself with its common usage involving array destructuring. I had to transition my knowledge of class-based components to Hooks, and make sure that I was sending a copy of my state manually instead of relying on <code>setState()</code> to do some of this lifting.
                <br /><br />
                These were not totally foreign concerns, as I'd spent time with Hooks tutorials and ended up with working apps, but it was engaging and ultimately satisfying to debug the situation myself. After a little bit of fumbling, I was pleased with the final result, and I now find the Hooks syntax easier to read at a glance than the old class-based techniques. 
                <br /><br />
                Another engaging moment came when I tried to implement a modal component for my Design gallery. Refactoring my existing modal code to rely on Hooks, I implemented a solution using a boolean modal state and conditional rendering. Coupling this with a <code>modalInfo</code> object passed via props, I was able to get the modal to display the clicked image -- but it was rather ugly. I then had to turn on my CSS goggles and attack the situation, finding the best way to display the modal's shade overlay, the centered and responsively-sized modal itself, and the corresponding caption. This was a hefty job, and it was very satisfying to watch it all come together.
            </p>



        </div>
    );

}

export default Welcome;