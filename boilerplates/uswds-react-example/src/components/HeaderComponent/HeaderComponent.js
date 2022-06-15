/* import React, { useState } from 'react'; */
import React from 'react';

import closeImg from "../../assets/uswds-2.9.0/img/close.svg";

/* import homeImg from "../images/raft-logo-712.jpg"; */

const HeaderComponent = () => {
    return (
      <section>
        <div className="usa-overlay"></div>
        <header className="usa-header usa-header--extended"><div className="usa-navbar">
            <div className="usa-logo" id="extended-logo">
              <em className="usa-logo__text"><a href="https://goraft.tech" title="Home" aria-label="Home">USWDS React Example App</a></em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav aria-label="Primary navigation" className="usa-nav">
              <div className="usa-nav__inner">
                <button className="usa-nav__close">
                  <img src={closeImg} alt="close" />
                </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <button 
                  className="usa-accordion__button usa-nav__link  usa-current" 
                  aria-expanded="false" 
                  aria-controls="extended-nav-section-one">
                  <span>Current section</span>
                </button>
                <ul id="extended-nav-section-one" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="https://goraft.tech" className=""> Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="https://goraft.tech" className=""> Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="https://goraft.tech" className=""> Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <button className="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-two">
                  <span>Section</span>
                </button>
                <ul id="extended-nav-section-two" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="https://goraft.tech" className=""> Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="https://goraft.tech" className=""> Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="https://goraft.tech" className=""> Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="https://goraft.tech">
                  <span>Simple link</span>
                </a>
              </li>
            </ul>
            <div className="usa-nav__secondary">
              <ul className="usa-nav__secondary-links">
                <li className="usa-nav__secondary-item">
                  <a href="https://goraft.tech">Secondary link</a>
                </li>
                <li className="usa-nav__secondary-item">
                  <a href="https://goraft.tech">Another secondary link</a>
                </li>
              </ul>
              <form className="usa-search usa-search--small">
                <label className="usa-sr-only" htmlFor="extended-search-field-small">Search small</label>
                <input className="usa-input" id="extended-search-field-small" type="search" name="search" />
                <button className="usa-button" type="submit">
                  <span className="usa-sr-only">Search</span>
                </button>
              </form>
            </div>
            </div>
          </nav>
        </header>
      </section>
    );
}

export default HeaderComponent;