import React from 'react';
import PropTypes from 'prop-types';

import { Card, Header, Image, Segment } from 'semantic-ui-react';

const Organizations = ({ data: organizations }) => (
  <Segment basic padded>
    <Header as="h2">Organizations</Header>
    <Card.Group itemsPerRow={4}>
      {organizations.map(({ avatar_url, description, login, url }) => (
        <Card
          header={login}
          description={description}
          href={url}
          image={avatar_url}
        />
      ))}
    </Card.Group>
  </Segment>
);

Organizations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Organizations.defaultProps = {
  data: [],
};

export default Organizations;
