import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import useForm from "../hooks/useForm";
import { validate } from "../lib/validationRules";

function Signup() {
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState(false);

  const postSignup = ({ firstName, lastName, email, password }) => {
    // Todo: Make this work...
    // reference login logic w/ axios call.
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          setIsSuccess(true);
        } else {
          setIsError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isSuccess) {
    return <Redirect to="success" />;
  }

  const SignupForm = () => {
    const handleLogin = (values) => {
      const { firstName } = values;
      const { lastName } = values;
      const { email } = values;
      const { password } = values;

      postSignup({ firstName, lastName, email, password });
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
      handleLogin,
      validate
    );

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            className={`input ${errors.firstName && "invalid"}`}
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={values.firstName || ""}
            required
          />
          <input
            className={`input ${errors.lastName && "invalid"}`}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={values.lastName || ""}
            required
          />
        </div>
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
            Sign Up
          </button>
          <Link to="/">
            <button type="button" className="usa-button-secondary">
              Cancel
            </button>
          </Link>
        </div>
        <Link to="/login">Already have an account?</Link>
      </form>
    );
  };

  return (
    <section className="login">
      <h3>Welcome, please fill out form below to create an account</h3>
      <SignupForm />
      {isError && (
        <h3>
          An error occurred while registering your account. Please try again.
        </h3>
      )}
    </section>
  );
}

export default Signup;
