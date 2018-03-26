import React from 'react';
import PropTypes from 'prop-types';
import StickyButton from '../../../StickyButton';

const UserInfoButton = ({ onClick, toggled }) => (
  <StickyButton
    bottom="4em"
    circular
    icon={toggled ? 'close' : 'user'}
    onClick={onClick}
    right="1em"
  />
);

PropTypes.propTypes = {
  onClick: PropTypes.func,
  toggled: PropTypes.bool,
};

PropTypes.defaultProps = {
  onClick: () => {},
  toggled: false,
};

export default UserInfoButton;
