import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Header = ({ children }) => <Styled.Header>{children}</Styled.Header>;

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
