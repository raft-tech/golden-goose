import PropTypes from "prop-types";
import React from "react";
import Breadcrumbs from "@department-of-veterans-affairs/formation-react/Breadcrumbs";

export const Page = ({ title, breadcrumbs, children }) => {
  return (
    <section className="page">
      {!!breadcrumbs.length && (
        <div className="navbar has-background-white-bis print-hide">
          <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
        </div>
      )}
      <div>
        <section className="container">
          <div className="navbar-menu is-marginless print-hide">
            {!!title && (
              <div className="navbar-start">
                <div className="navbar-item">
                  <div>
                    <h3 className="vads-u-font-family--sans">{title}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      {children}
    </section>
  );
};

Page.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  children: PropTypes.node,
  title: PropTypes.string,
};

Page.Section = ({ children }) => (
  <section className="fixed">
    <div className="container">{children}</div>
  </section>
);

Page.Section.propTypes = {
  children: PropTypes.node,
};
