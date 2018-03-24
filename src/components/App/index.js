import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import Repos from '../../pages/Repos';
import Organizations from '../../pages/Organizations';
import Search from '../../pages/Search';
import User from '../../pages/User';

class App extends Component {
  render() {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <header style={{ background: 'red' }}>
          <Search />
        </header>
        <main style={{ background: 'green', display: 'flex', flex: 1 }}>
          <div style={{ background: 'blue', maxWidth: 400 }}>
            <User />
          </div>
          <div style={{ flex: 1 }}>
            <nav
              style={{
                background: 'pink',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Link to="/">Organizations</Link>
              <Link to="/repos">Repos</Link>
            </nav>
            <div style={{ background: 'white' }}>
              <Switch>
                <Route path="/" exact component={Organizations} />
                <Route path="/repos" exact component={Repos} />
                <Route component={() => <div>NOT FOUND!</div>} />
              </Switch>
            </div>
          </div>
        </main>
        <footer style={{ background: 'red' }}>@David Jiménez Jiménez</footer>
      </div>
    );
  }
}

export default withRouter(App);
