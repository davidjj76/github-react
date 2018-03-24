import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Repos from '../../pages/Repos';
import Organizations from '../../pages/Organizations';
import Search from '../../pages/Search';
import User from '../../pages/User';

import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
  state = { asideIsOpen: false };

  render() {
    return (
      <div
        style={{
          background: 'pink',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Header>
          <nav>
            <Link to="/">Organizations</Link>
            <Link to="/repos">Repos</Link>
          </nav>
          <Search />
        </Header>
        <div
          style={{
            background: 'yellow',
            marginTop: '48px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              background: 'blue',
              flexGrow: 1,
            }}
          >
            <Switch>
              <Route path="/" exact component={Organizations} />
              <Route path="/repos" exact component={Repos} />
              <Route component={() => <div>NOT FOUND!</div>} />
            </Switch>
          </div>
          <div
            style={{
              background: 'red',
              position: 'fixed',
              top: '48px',
              left: 0,
              opacity: this.state.asideIsOpen ? 1 : 0,
              width: '100%',
              height: 'calc(100vh - 48px)',
              transition: 'all 0.5s ease',
              transform: !this.state.asideIsOpen && 'translateY(48px)',
            }}
          >
            <User />
          </div>
        </div>
        <button
          style={{ position: 'fixed', bottom: '4em', right: '1em' }}
          onClick={() =>
            this.setState({ asideIsOpen: !this.state.asideIsOpen })
          }
        >
          {this.state.asideIsOpen ? 'x' : '+'}
        </button>
        <Footer>@David Jiménez Jiménez</Footer>
      </div>
    );
  }
}

export default App;
