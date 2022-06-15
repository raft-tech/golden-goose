import React from 'react';


/* import homeImg from "../images/raft-logo-712.jpg"; */

const TagLineComponent = () => {

    return (
      <section className="grid-container usa-section">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
              The raft approach
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <p>
              We’re problem solvers and innovators with a focus on Open Source.
              Our name is actually inspired from the , which revolutionized
              solving consensus problems by being more reliable and easier to
              understand.
            </p>
            <p>
              It is also the algorithm implemented by etcd (brain of the
              Kubernetes). We took on this name because we share a similar goal:
              replace any overly complex and outdated system with a new,
              efficient, and secure one that just works.
            </p>
          </div>
        </div>
      </section>
    );
}

export default TagLineComponent;