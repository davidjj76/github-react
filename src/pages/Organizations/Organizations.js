import React from 'react';
import PropTypes from 'prop-types';

const Organizations = ({ data }) => (
  <div>
    <div>ORGANIZATIONS</div>
    <div>
      {data &&
        JSON.stringify(
          data.map(r => ({
            avatar_url: r.avatar_url,
            description: r.description,
            login: r.login,
            url: r.url,
          })),
        )}
    </div>
  </div>
);

Organizations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Organizations.defaultProps = {
  data: [],
};

export default Organizations;
