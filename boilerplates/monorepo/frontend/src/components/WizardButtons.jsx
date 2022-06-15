import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavButtons = ({
  currentStep,
  nextPath,
  backPath,
  handleClick,
}) => {
  return (
    <div className="wizard buttons">
      <>
        <NavLink to={backPath}>
          <button
            type="button"
            className="usa-button-secondary"
            name="back"
            onClick={(e) => handleClick(e)}
          >
            Back
          </button>
        </NavLink>
        <NavLink to={nextPath}>
          <button
            type="button"
            className="usa-button"
            name="next"
            onClick={(e) => handleClick(e)}
          >
            {currentStep !== 3 ? "Save & Continue" : "Submit"}
          </button>
        </NavLink>
      </>
    </div>
  );
};

NavButtons.propTypes = {
  currentStep: PropTypes.number,
  nextPath: PropTypes.string,
  backPath: PropTypes.string,
  handleClick: PropTypes.func,
};
