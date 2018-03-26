import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Container, Image, Menu, Responsive } from 'semantic-ui-react';

import Search from '../../../../pages/Search';

const AppMenu = ({ location }) => (
  <Menu fixed="top" inverted size="large">
    <Container>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu.Item>
          <Image size="mini" src="/logo.png" style={{ marginRight: '1.5em' }} />
          Github Search
        </Menu.Item>
      </Responsive>
      <Menu.Item active={location.pathname === '/'}>
        <NavLink exact to="/">
          Organizations
        </NavLink>
      </Menu.Item>
      <Menu.Item active={location.pathname === '/repos'}>
        <NavLink exact to="/repos">
          Repositories
        </NavLink>
      </Menu.Item>
      <Menu.Item position="right">
        <Search />
      </Menu.Item>
    </Container>
  </Menu>
);

export default withRouter(AppMenu);
