import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  onChange,
  onSubmit,
  search,
}) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={search}
      onChange={onChange}
    />
  </form>
);

Search.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  text: PropTypes.string,
};

Search.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  search: '',
};

export default Search;
