import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ data }) => (
  <div>
    <div>REPOS</div>
    <div>
      {data &&
        JSON.stringify(
          data.map(r => ({
            created_at: r.created_at,
            description: r.description,
            fork: r.fork,
            language: r.language,
            name: r.name,
            url: r.url,
          })),
        )}
    </div>
  </div>
);

Repos.propTypes = {
  data: PropTypes.object,
};

Repos.defaultProps = {
  data: {},
};

export default Repos;
