import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StickyButton = styled(Button)`
  position: fixed;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
`;

export default StickyButton;
