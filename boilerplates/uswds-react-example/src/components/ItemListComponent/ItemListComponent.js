import React, { useState } from 'react';

const ItemListComponent = props => {
  const [itemlistvisible, setitemlistvisible] = useState(false);
 
  const showHideItemList = () => {
    setitemlistvisible(!itemlistvisible);
  }

  const artifacts = props.itemlist.map((item, i) => {
      return (
        <li key={item.id} className="itemlist__item">
          <a 
            href={item.artifactLink} 
            target="_blank"
            rel="noopener noreferrer"
            >
            {item.title}
          </a>
          <p>{item.content}</p>
        </li>
      );
  });

  return (
    <div className="usa-accordion usa-accordion--bordered">
      <h2 className="usa-accordion__heading">
        <button
          className="usa-accordion__button"
          aria-expanded="false"
          aria-controls={props.id}
          onClick={showHideItemList}
        >
          {props.title} {props.itemlist.length}
        </button>
      </h2>
      {itemlistvisible && <div id={props.id} className="usa-accordion__content usa-prose">{artifacts}</div>}
    </div>
  );
  }

  export default ItemListComponent;
