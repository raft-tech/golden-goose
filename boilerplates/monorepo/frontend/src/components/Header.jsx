import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = ({ currentUser, handleLogOff }) => {
  return (
    <header className="header">
      <div className="buttons">
        {!currentUser && (
          <>
            <NavLink to="/login">
              <button type="button" className="usa-button">
                Sign In
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button type="button" className="usa-button-secondary">
                Sign Up
              </button>
            </NavLink>
          </>
        )}
        {currentUser && (
          <>
            <NavLink to="/">
              <button
                type="button"
                className="usa-button-secondary"
                onClick={handleLogOff}
              >
                Sign Out
              </button>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  currentUser: PropTypes.string,
  handleLogOff: PropTypes.func,
};

export default Header;
