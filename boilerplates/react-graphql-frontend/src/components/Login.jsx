// TODO: add prop validation
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_LOGIN } from '../graphql/mutations/login';
import Errors from './Errors';
import FormInput from './FormInput';
import TribeLogo from '../images/logo-tribe.png';
import '../styles/bulma.css';
import '../styles/Login.scss';


const Login = ({ onLogin, setAccount, account }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const [userLogin, { loading, called, error }] = useMutation(MUTATION_LOGIN, {
    onCompleted: (data) => {
      onLogin(true);
      setAccount(data);
    },
  });

  if (account) return null;

  const invalidForm = () => {
    if (!email || !password) return true;
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (invalidForm()) {
      setFormError('Please enter email and password!');
      return;
    }

    userLogin({
      variables: { credentials: { email, password } },
    }).catch(() => {
      // No action, errors are in the `error` var returned by the Mutation
    });
  };

  const buttonStyles = (isLoading, wasCalled) => {
    let result = 'button';
    if (wasCalled && isLoading) result += ' is-loading';
    return result;
  };

  return (
    <form id="LoginForm" onSubmit={onSubmit} autoComplete="off">
      <img id="LoginLogo" src={TribeLogo} alt="Coeur d'Alene Tribal Seal" />
      <h1>Login</h1>
      <FormInput
        name="username"
        type="email"
        label="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        id="LoginButton"
        className={buttonStyles(loading, called)}
        onClick={onSubmit}
        type="submit"
      >
        Login
      </button>
      {/* TODO: Styling of error messages could use some major improvement */}
      {formError && <div className="formError">{formError}</div>}
      <Errors error={error} title="Unable to Authenticate" />
    </form>
  );
};

export default Login;
