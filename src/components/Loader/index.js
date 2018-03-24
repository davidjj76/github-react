import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Loader = ({ children, ...style }) => (
  <Styled.Wrapper>
    <Styled.Loader {...style} />
    {children && <Styled.Label>{children}</Styled.Label>}
  </Styled.Wrapper>
);

Loader.propTypes = {
  children: PropTypes.string,
  circleColor: PropTypes.string,
  size: PropTypes.number,
  spinColor: PropTypes.string,
};

Loader.defaultProps = {
  children: '',
  circleColor: '#f3f3f3',
  size: 30,
  spinColor: '#5388cd',
};

export default Loader;
