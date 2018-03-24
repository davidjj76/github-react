import styled, { css, keyframes } from 'styled-components';

const borderMixin = css`
  border: ${props => `${props.size / 4}px solid ${props.circleColor}`};
  border-top: ${props => `${props.size / 4}px solid ${props.spinColor}}`};
  border-radius: 50%;
`;

const sizeMixin = css`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const Loader = styled.div`
  animation: ${spin} 2s linear infinite;
  ${borderMixin};
  ${sizeMixin};
`;

export const Label = styled.span`
  font-size: 1.2rem;
  margin-top: 1.4rem;
`;
