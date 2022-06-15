import React from 'react';


/* import homeImg from "../images/raft-logo-712.jpg"; */

const HeroComponent = () => {

    return (
      <section className="usa-hero" aria-label="Introduction">
        <div className="grid-container">
          <div className="usa-hero__callout">
            <h1 className="usa-hero__heading">
              <span className="usa-hero__heading--alt">Raft</span>
              Building the unimagined
            </h1>
            <p>
              A new breed of digital consulting firm, that’s part full stack
              consultancy, part think tank and part band of creative folks.
            </p>
            <a className="usa-button" href="https://goraft.tech">
              Call to action
            </a>
          </div>
        </div>
      </section>
    );
}

export default HeroComponent;