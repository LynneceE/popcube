import React from 'react';

function Portfolio() {
    return (


 <section class="cards">

        <div class="card-container">
            <img src="src\images\run-bud.png"/>
            <div class="card-info">
                <a href="https://lynnecee.github.io/run-buddy-2/">Run Buddy</a>
            </div>
        </div>

        <div class="card-container">
            <img src="src\images\pwa.png"/>
            <div class="card-info">
                <a href="https://infinite-tundra-37735.herokuapp.com/">Budget Tracker PWA</a>
            </div>
        </div>

        <div class="card-container">
            <img src="src\images\pas-gen.png"/>
            <div class="card-info">
                <a href="https://lynnecee.github.io/my-password-generator/">Password Generator</a>
            </div>
        </div>
</section>
        

    );
}

export default Portfolio;