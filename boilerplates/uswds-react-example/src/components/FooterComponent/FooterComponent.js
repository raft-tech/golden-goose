import React from 'react';

import logoImg from "../../assets/uswds-2.9.0/img/logo-img.png";

const FooterComponent = () => {

    return (
      <footer className="usa-footer">
        <div className="grid-container usa-footer__return-to-top">
            <a href="https://goraft.tech">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
            <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
                <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                    <a className="usa-footer__primary-link" href="https://goraft.tech">Primary link</a>
                </li>
                <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                    <a className="usa-footer__primary-link" href="https://goraft.tech">Primary link</a>
                </li>
            </ul>
            </nav>
        </div>

        <div className="usa-footer__secondary-section">
            <div className="grid-container">
            <div className="grid-row grid-gap">
                <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                <div className="mobile-lg:grid-col-auto">
                    <img className="usa-footer__logo-img" src={logoImg} alt="" />
                </div>
                <div className="mobile-lg:grid-col-auto">
                    <h3 className="usa-footer__logo-heading">Name of Agency</h3>
                </div>
                </div>
                <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                <div className="usa-footer__social-links grid-row grid-gap-1">
                    <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--facebook" href="https://goraft.tech">
                        <span>Facebook</span>
                    </a>
                    </div>
                    <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--twitter" href="https://goraft.tech">
                        <span>Twitter</span>
                    </a>
                    </div>
                    <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--youtube" href="https://goraft.tech">
                        <span>YouTube</span>
                    </a>
                    </div>
                    <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--rss" href="https://goraft.tech">
                        <span>RSS</span>
                    </a>
                    </div>
                </div>
                <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
                <address className="usa-footer__address">
                    <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                        <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                    </div>
                    <div className="grid-col-auto">
                        <a href="mailto:info@agency.gov">info@agency.gov</a>
                    </div>
                    </div>
                </address>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default FooterComponent;