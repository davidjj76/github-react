import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Repos from '../../pages/Repos';
import Organizations from '../../pages/Organizations';
import Search from '../../pages/Search';
import User from '../../pages/User';

import Header from '../Header';
import Footer from '../Footer';

const App = () => (
  <React.Fragment>
    <Header>
      <nav>
        <Link to="/">Organizations</Link>
        <Link to="/repos">Repos</Link>
      </nav>
      <Search />
    </Header>
    <main style={{ background: 'green', display: 'flex', margin: '3em' }}>
      <div style={{ flex: 1 }}>
        <div style={{ background: 'white' }}>
          <Switch>
            <Route path="/" exact component={Organizations} />
            <Route path="/repos" exact component={Repos} />
            <Route component={() => <div>NOT FOUND!</div>} />
          </Switch>
        </div>
      </div>
      <div style={{ background: 'blue', maxWidth: 400 }}>
        <User />
      </div>
    </main>
    <Footer>@David Jiménez Jiménez</Footer>
  </React.Fragment>
);

export default App;
