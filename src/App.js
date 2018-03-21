import React, { Component } from 'react';

import { getUserData, getRepos } from './services/github-api';

class App extends Component {
  state = {
    username: '',
    repos: null,
    userData: null,
  };

  async fetchData() {
    const { username } = this.state;
    if (username) {
      const repos = await getRepos(username);
      this.setState({ repos }, async () => {
        const userData = await getUserData(username);
        this.setState({ userData }, () => {
          this.setState({ username: '' });
        });
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { repos, userData, username } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            value={username}
            onChange={this.handleChange}
          />
        </form>
        <div>REPOS</div>
        <div>
          {repos && JSON.stringify(repos)}
        </div>
        <div>USER DATA</div>
        <div>
          {userData && JSON.stringify(userData)}
        </div>
      </div>
    );
  }
}

export default App;
