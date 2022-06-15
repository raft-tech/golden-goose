// TODO: add prop validation
/* eslint-disable react/prop-types */
import React from 'react';
import Errors from './Errors';
import { formatList } from '../services/listServices';
import UserField from './UserField';
import '../styles/UserData.scss';

const UserData = ({ data, error }) => {
  if (!data) return null;

  /* TODO: Validate existence of each nested key optional-chaining would nice here.
  *  (I don't remember the libarary name...might be in lodash),
  */
  const {
    email, admin, roles, organizations,
  } = data.viewer.self;

  const roleList = roles.map((role) => role.name);
  const orgList = organizations
    .map((org) => (org ? org.name : null))
    .filter((x) => x);

  // TODO: Improve layout for large/small screens; looks reasonable from tablet to laptop
  // TODO: Improve styling
  return (
    <section id="UserData">
      <h1>User Details</h1>
      <UserField label="Email" data={email} />
      <UserField label="Administrator" data={admin.toString()} />
      <UserField label="Roles" data={formatList({ list: roleList })} />
      <UserField label="Organizations" data={formatList({ list: orgList })} />
      <Errors error={error} title="Error fetching user details!" />
    </section>
  );
};

export default UserData;
