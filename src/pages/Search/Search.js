import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const Search = ({ onChange, onSubmit, search, searching }) => (
  <form onSubmit={onSubmit}>
    <Input
      icon="search"
      inverted
      loading={searching}
      onChange={onChange}
      placeholder="Search..."
      value={search}
    />
  </form>
);

Search.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  search: PropTypes.string,
  searching: PropTypes.bool,
};

Search.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  search: '',
  searching: false,
};

export default Search;
