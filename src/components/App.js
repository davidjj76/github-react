import React, { Component } from 'react';

import User from '../pages/User';

class App extends Component {
  // state = {
  //   username: 'davidjj76',
  //   repos: null,
  //   userData: null,
  // };

  // async fetchData() {
  //   const { username } = this.state;
  //   if (username) {
  //     const repos = await getRepos(username);
  //     console.log('repos', repos);
  //     this.setState({ repos }, async () => {
  //       const userData = await getUserData(username);
  //       console.log('userData', userData);
  //       this.setState({ userData }, () => {
  //         this.setState({ username: '' });
  //       });
  //     });
  //   }
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.fetchData();
  // }

  // render() {
  //   const { repos, userData, username } = this.state;
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         <input
  //           name="username"
  //           type="text"
  //           value={username}
  //           onChange={this.handleChange}
  //         />
  //       </form>
  //       <div>REPOS</div>
  //       <div>
  //         {repos && JSON.stringify(repos.map(r => ({
  //           created_at: r.created_at,
  //           description: r.description,
  //           fork: r.fork,
  //           language: r.language,
  //           name: r.name,
  //           url: r.url,
  //         })))}
  //       </div>
  //       <div>USER DATA</div>
  //       <div>
  //         {userData && JSON.stringify({
  //           orgs: userData.orgs.map(o => ({
  //             avatar_url: o.avatar_url,
  //             description: o.description,
  //             login: o.login,
  //             url: o.url,
  //           })),
  //           user: {
  //             avatar_url: userData.user.avatar_url,
  //             bio: userData.user.bio,
  //             blog: userData.user.blog,
  //             company: userData.user.company,
  //             created_at: userData.user.created_at,
  //             email: userData.user.email,
  //             followers: userData.user.followers,
  //             following: userData.user.following,
  //             location: userData.user.location,
  //             login: userData.user.login,
  //             name: userData.user.name,
  //             public_gists: userData.user.public_gists,
  //             public_repos: userData.user.public_repos,
  //             url: userData.user.url,
  //           }
  //         })}
  //       </div>
  //     </div>
  //   );
  render () {
    return (<User />);
  }
}

export default App;
