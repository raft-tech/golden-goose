// TODO: add prop validation
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/LoadingScreen.scss';

const LoadingScreen = ({ title }) => (
  <div id="LoadingScreen">
    {title && <h1>{title}</h1>}
    <button className="is-loading is-disabled button" type="button">
      Loading
    </button>
  </div>
);

export default LoadingScreen;
