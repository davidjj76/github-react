import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <div>
    <h3>Ooops! Something was wrong...</h3>
    <div>{JSON.stringify(error)}</div>
  </div>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
