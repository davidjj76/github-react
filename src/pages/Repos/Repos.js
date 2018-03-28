import React from 'react';
import PropTypes from 'prop-types';

import { Header, List, Segment } from 'semantic-ui-react';

const Repos = ({ data: respositories }) => (
  <Segment basic padded>
    <Header as="h2">Repositories</Header>
    <List divided relaxed size="large">
      {respositories.map(({ description, id, name, url }) => (
        <List.Item key={id}>
          <List.Icon name="github" size="big" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a" href={url}>
              {name}
            </List.Header>
            <List.Description>{description}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Segment>
);

Repos.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Repos.defaultProps = {
  data: [],
};

export default Repos;
