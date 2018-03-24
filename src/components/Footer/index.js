import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Footer = ({ children }) => <Styled.Footer>{children}</Styled.Footer>;

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
