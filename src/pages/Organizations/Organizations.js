import React from 'react';
import PropTypes from 'prop-types';

import { Card, Header, Segment } from 'semantic-ui-react';

const Organizations = ({ data: organizations }) => (
  <Segment basic padded>
    <Header as="h2">Organizations</Header>
    <Card.Group itemsPerRow={4}>
      {organizations.map(({ avatar_url, description, id, login }) => (
        <Card
          description={description}
          header={login}
          image={avatar_url}
          key={id}
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
