import React from 'react';

import ItemListComponent from '../ItemListComponent';

const ProjectCardComponent = props => {
    return (
      <li className="tablet:grid-col-4 usa-card">
        <div className="usa-card__container">
          <header className="usa-card__header">
            <h2 className="usa-card__heading">{props.title}</h2>
          </header>
          <div className="usa-card__body">
            <div className="usa-card__media usa-card__media--exdent">
              <div className="usa-card__img">
                <img src={props.image} alt={props.imageAlt} />
              </div>
            </div>
            <div className="usa-card__media">
              <div className="card__content">
                <p>{props.content}</p>
              </div>
              <div className="card__detail-section">
                <ItemListComponent
                  itemlist={props.blogposts}
                  key={props.id}
                  title="Blogposts"
                  itemtype="blogposts"
               />
              </div>
            </div>
          </div>
        </div>
      </li>
    );
}

export default ProjectCardComponent;