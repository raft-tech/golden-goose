import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import useForm from "../hooks/useForm";
import { validate } from "../lib/validationRules";

function Login({ location }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
  const referer = location.state ? location.state.referer : "/";

  // Needs to be updated to Rails server...
  const postLogin = ({ email, password }) => {
    console.log(process.env);
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setAuthTokens(response.token);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        console.log("Error: ", e);
        setIsError(true);
      });
  };

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  const LoginForm = () => {
    const handleLogin = (values) => {
      const { email } = values;
      const { password } = values;

      postLogin({ email, password });
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
      handleLogin,
      validate
    );

    // This will be need to be changed to actual post request to backend.

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            className={`input ${errors.email && "invalid"}`}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          {errors.email && <p className="invalid">{errors.email}</p>}
        </div>
        <div className="form-input">
          <input
            className={`input ${errors.password && "invalid"}`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {errors.password && <p className="invalid">{errors.password}</p>}
        </div>
        <div className="button-grp">
          <button type="submit" className="usa-button">
            Login
          </button>
          <Link to="/">
            <button type="button" className="usa-button-secondary">
              Cancel
            </button>
          </Link>
        </div>
        <Link to="/signup">Don&apos;t have an account?</Link>
      </form>
    );
  };

  return (
    <section className="login">
      <h3>Welcome, Please login below</h3>
      <LoginForm />
      {isError && <h3>The username or password provided were incorrect!</h3>}
    </section>
  );
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      referer: PropTypes.string,
    }),
  }),
};

export default Login;
