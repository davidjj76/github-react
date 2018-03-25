import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';

import withToggle from '../../modules/withToggle';
import Repos from '../../pages/Repos';
import Organizations from '../../pages/Organizations';
import Search from '../../pages/Search';
import User from '../../pages/User';

import * as Styled from './styles';

const HEADER_HEIGHT = 48;
const FOOTER_HEIGHT = 40;

const enhancer = withToggle('isAsideOpen');

const App = ({ isAsideOpen, onToggle }) => (
  <Styled.AppWrapper>
    <Styled.Header height={HEADER_HEIGHT}>
      <nav>
        <Link to="/">Organizations</Link>
        <Link to="/repos">Repos</Link>
      </nav>
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
      <Styled.Aside isOpen={isAsideOpen} top={HEADER_HEIGHT}>
        <User />
      </Styled.Aside>
    </Styled.MainWrapper>
    <button
      style={{ position: 'fixed', bottom: '4em', right: '1em' }}
      onClick={onToggle}
    >
      {isAsideOpen ? 'x' : '+'}
    </button>
    <Styled.Footer height={FOOTER_HEIGHT}>@David Jiménez Jiménez</Styled.Footer>
  </Styled.AppWrapper>
);

App.propTypes = {
  isAsideOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

App.defaultProps = {
  isAsideOpen: false,
  onToggle: () => {},
};

export default enhancer(App);
