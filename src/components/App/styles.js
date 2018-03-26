import styled, { css } from 'styled-components';

const isOpenMixin = css`
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: ${props => !props.isOpen && `translateY(${props.top}px)`};
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const MainWrapper = styled.div`
  margin-top: ${props => `${props.marginTop}px`};
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

export const Main = styled.main`
  flex-grow: 1;
  overflow-x: hidden;
`;

export const Overlay = styled.div`
  background-color: #fff;
  position: fixed;
  top: ${props => `${props.top}px`};
  left: 0;
  width: 100%;
  height: ${props => `calc(100vh - ${props.top}px)`};
  transition: all 0.5s ease;
  ${isOpenMixin};
`;

export const Aside = styled.aside`
  width: 320px;
`;

export const Footer = styled.footer`
  align-items: center;
  background-color: #24292e;
  color: #fff;
  display: flex;
  font-size: 0.8em;
  height: ${props => `${props.height}px`};
  padding: 1rem;
  width: 100%;
`;
