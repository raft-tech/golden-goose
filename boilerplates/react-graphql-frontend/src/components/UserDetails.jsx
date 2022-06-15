import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PropTypes } from 'prop-types';
import { USER_DETAILS } from '../graphql/queries/userDetails';
import UserData from './UserData';
import LoadingScreen from './LoadingScreen';
import AuthenticatedPage from './AuthenticatedPage';

const UserDetails = ({ account, logout }) => {
  const options = {
    context: { ...account },
    errorPolicy: 'all', // Allow display of partial results alongside errors
    fetchPolicy: 'network-only', // Workaround to reset the `error` variable on each logout/login cycle; certainly not the most efficient approach
  };

  const {
    data, loading, called, error,
  } = useQuery(USER_DETAILS, options);

  if (!called || (called && loading)) return <LoadingScreen title="Loading User Details" />;

  // TODO: Improve look and feel.
  // TODO: Add navigation bar or navigation pane.
  return (
    <section id="UserDetails">
      <AuthenticatedPage account={account} logout={logout}>
        <UserData data={data} error={error} />
      </AuthenticatedPage>
    </section>
  );
};

UserDetails.propTypes = {
  // TODO: Capture shape of account object
  // eslint-disable-next-line react/forbid-prop-types
  account: PropTypes.object,
  logout: PropTypes.func,
};

UserDetails.defaultProps = {
  account: null,
  logout: () => null,
};

export default UserDetails;
