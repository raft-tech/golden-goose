import React from "react";
import PropTypes from "prop-types";
import MegaMenu from "@department-of-veterans-affairs/formation-react/MegaMenu";

function NavMenu({ data }) {
  return <MegaMenu data={data} />;
}

NavMenu.propTypes = {
  data: PropTypes.shape({}),
};

export default NavMenu;
