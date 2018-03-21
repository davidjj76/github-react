import React from 'react';

const User = ({ data }) => (
  <div>
    <div>USER DATA</div>
    <div>
      {data && JSON.stringify({
        user: {
          avatar_url: data.avatar_url,
          bio: data.bio,
          blog: data.blog,
          company: data.company,
          created_at: data.created_at,
          email: data.email,
          followers: data.followers,
          following: data.following,
          location: data.location,
          login: data.login,
          name: data.name,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
          url: data.url,
        }
      })}
    </div>
  </div>
);

export default User;
