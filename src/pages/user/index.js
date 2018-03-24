import React from 'react';
import PropTypes from 'prop-types';

const User = ({ data }) => (
  <div>
    <h2>USER DATA</h2>
    <div>
      {data &&
        JSON.stringify({
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
          },
        })}
    </div>
  </div>
);

User.propTypes = {
  data: PropTypes.object,
};

User.defaultProps = {
  data: {},
};

export default User;
