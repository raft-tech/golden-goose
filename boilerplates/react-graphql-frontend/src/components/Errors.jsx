// TODO: Add prop validation
/* eslint-disable react/prop-types */
import React from 'react';

const Errors = ({ error, title }) => {
  if (!error) return null;

  const errorSet = new Set();
  error.graphQLErrors.forEach((err) => errorSet.add(err.message));
  const errorList = Array.from(errorSet);

  // TODO: Validate assumption that duplicate errors should be suppressed
  return (
    <div className="errors">
      {title && <h1>{title}</h1>}
      {errorList.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </div>
  );
};

export default Errors;
