import React from 'react';
import { projects } from '../../data';

import ProjectCardComponent from '../ProjectCardComponent';

const ProjectListComponent = () => {
    return (
      <section className="usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <ul className="usa-card-group">
              {projects.length &&
                projects.map((project, i) => {
                  return (
                      <ProjectCardComponent key={i + 1} {...project} />
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    );
}

export default ProjectListComponent;