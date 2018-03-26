import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { NavLink, Route, Switch } from 'react-router-dom';

import UserInfoButton from './components/UserInfoButton';

import withToggle from '../../modules/withToggle';
import Repos from '../../pages/Repos';
import Organizations from '../../pages/Organizations';
import Search from '../../pages/Search';
import User from '../../pages/User';

import * as Styled from './styles';

const HEADER_HEIGHT = 72;
const FOOTER_HEIGHT = 40;

const enhancer = withToggle('isOverlayOpen');

const App = ({ isOverlayOpen, onToggle }) => (
  <Styled.AppWrapper>
    <Styled.Header height={HEADER_HEIGHT}>
      <Styled.Nav>
        <li>
          <NavLink exact to="/">
            Organizations
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/repos">
            Repos
          </NavLink>
        </li>
      </Styled.Nav>
      <Search />
    </Styled.Header>
    <Styled.MainWrapper marginTop={HEADER_HEIGHT}>
      <Styled.Main>
        <Switch>
          <Route path="/" exact component={Organizations} />
          <Route path="/repos" exact component={Repos} />
          <Route component={() => <div>NOT FOUND!</div>} />
        </Switch>
      </Styled.Main>
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <React.Fragment>
              <Styled.Overlay isOpen={isOverlayOpen} top={HEADER_HEIGHT}>
                <User />
              </Styled.Overlay>
              <UserInfoButton onClick={onToggle} toggled={isOverlayOpen} />
            </React.Fragment>
          ) : (
            <Styled.Aside>
              <User />
            </Styled.Aside>
          )
        }
      </Media>
    </Styled.MainWrapper>
    <Styled.Footer height={FOOTER_HEIGHT}>@David Jiménez Jiménez</Styled.Footer>
  </Styled.AppWrapper>
);

App.propTypes = {
  isOverlayOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

App.defaultProps = {
  isOverlayOpen: false,
  onToggle: () => {},
};

export default enhancer(App);
