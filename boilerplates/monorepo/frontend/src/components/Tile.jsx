import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Tile = ({ id, label, icon, disabled, path }) => {
  return (
    <NavLink to={path}>
      <section className="category-tile" key={id} disabled={disabled}>
        <i src={icon} />
        <h4 className="vads-u-font-family--sans">{label}</h4>
      </section>
    </NavLink>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  path: PropTypes.string,
};

export default Tile;
