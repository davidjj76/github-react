import React from 'react';

const Error = ({ error }) => (
  <div>
    <h3>Ooops! Something was wrong...</h3>
    <div>{JSON.stringify(error)}</div>
  </div>
);

export default Error;
