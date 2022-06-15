import React from 'react';

import cloudNativeImg from "../../assets/images/cloud-native1.png";
import dataScienceImg from "../../assets/images/data-science1.png";
import digitalTransformationImg from "../../assets/images/digital-transformation1.png";
import productStrategyImg from "../../assets/images/product-strategy1.png";


/* import homeImg from "../images/raft-logo-712.jpg"; */

const GraphicListComponent = () => {

    return (
      <section className="usa-graphic-list usa-section usa-section--dark">
        <div className="grid-container">
          <div className="usa-graphic-list__row grid-row grid-gap">
            <div className="usa-media-block tablet:grid-col">
              <img
                className="usa-media-block__img"
                src={cloudNativeImg}
                alt="Alt text"
              />
              <div className="usa-media-block__body">
                <h2 className="usa-graphic-list__heading">
                  {" "}
                  We embrace Cloud Native automation.
                </h2>
                <p>
                  We’ve built a culture of automation, orchestration, and
                  security that is at the core of our organization. Our team
                  integrates open source software.
                </p>
              </div>
            </div>
            <div className="usa-media-block tablet:grid-col">
              <img
                className="usa-media-block__img"
                src={productStrategyImg}
                alt="Alt text"
              />
              <div className="usa-media-block__body">
                <h2 className="usa-graphic-list__heading">
                  We enable metrics-driven decisions.
                </h2>
                <p>
                  Keep body text to about 30 words. They can be shorter, but try
                  to be somewhat balanced across all four. It creates a clean
                  appearance with good spacing.
                </p>
              </div>
            </div>
          </div>
          <div className="usa-graphic-list__row grid-row grid-gap">
            <div className="usa-media-block tablet:grid-col">
              <img
                className="usa-media-block__img"
                src={digitalTransformationImg}
                alt="Alt text"
              />
              <div className="usa-media-block__body">
                <h2 className="usa-graphic-list__heading">
                  We accelerate innovation with scalable pipelines.
                </h2>
                <p>
                  Our DevSecOps team architects automated CI/CD pipelines to
                  integrating security into the platform operations so systems
                  are least trust by default.
                </p>
              </div>
            </div>
            <div className="usa-media-block tablet:grid-col">
              <img
                className="usa-media-block__img"
                src={dataScienceImg}
                alt="Alt text"
              />
              <div className="usa-media-block__body">
                <h2 className="usa-graphic-list__heading">
                  We inspire audience with powerful solutions.
                </h2>
                <p>
                  By creating products driven by user outcomes, instead of
                  features, we can empower your users to take actions that meet
                  and exceed your organizational goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default GraphicListComponent;