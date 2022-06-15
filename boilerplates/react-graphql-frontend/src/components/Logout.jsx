// TODO: add prop validation
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Logout.scss';

// TODO: Improve styling
const Logout = ({ account, onLogout }) => {
  if (!account) return null;
  return (
    <div id="Logout" onClick={onLogout} role="button" tabIndex={0}>
      Logout:
      {' '}
      {account.loginUser.user.email}
    </div>
  );
};

export default Logout;
