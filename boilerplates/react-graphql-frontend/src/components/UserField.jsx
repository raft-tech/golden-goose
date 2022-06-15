import React from 'react';
import PropTypes from 'prop-types';

const UserField = ({ label, data }) => (
  <div className="user-field">
    <span className="label">
      {label}
      :
    </span>
    {data}
  </div>
);

UserField.propTypes = {
  label: PropTypes.string,
  data: PropTypes.string,
};

UserField.defaultProps = {
  label: '',
  data: '',
};

export default UserField;
