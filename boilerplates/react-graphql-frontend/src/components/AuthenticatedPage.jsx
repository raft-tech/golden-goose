// TODO: add prop validation
/* eslint-disable react/prop-types */
import React from 'react';
import Logout from './Logout';

// Share the Logout component across all Authenticated pages
const AuthenticatedPage = ({ account, children, logout }) => (
  <div>
    {account && <Logout account={account} onLogout={logout} />}
    {children}
  </div>
);

export default AuthenticatedPage;
