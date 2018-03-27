import React from 'react';
import PropTypes from 'prop-types';

import { Card, Divider, Grid, Icon, Image, Statistic } from 'semantic-ui-react';

const renderActivity = ({
  followers,
  following,
  public_gists,
  public_repos,
}) => (
  <Grid columns="equal">
    <Grid.Row>
      <Grid.Column>
        <Statistic size="small">
          <Statistic.Value>{public_repos}</Statistic.Value>
          <Statistic.Label>Repositories</Statistic.Label>
        </Statistic>
      </Grid.Column>
      <Grid.Column>
        <Statistic size="small">
          <Statistic.Value>{public_gists}</Statistic.Value>
          <Statistic.Label>Gists</Statistic.Label>
        </Statistic>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Statistic size="small">
          <Statistic.Value>{followers}</Statistic.Value>
          <Statistic.Label>Followers</Statistic.Label>
        </Statistic>
      </Grid.Column>
      <Grid.Column>
        <Statistic size="small">
          <Statistic.Value>{following}</Statistic.Value>
          <Statistic.Label>Following</Statistic.Label>
        </Statistic>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const User = ({
  data: {
    avatar_url,
    company,
    created_at,
    followers,
    following,
    html_url,
    location,
    login,
    name,
    public_gists,
    public_repos,
  },
}) => (
  <Card centered className="user">
    <Image src={avatar_url} />
    <Card.Content as="a" href={html_url}>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="login">{login}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <span className="date">
        <Icon name="calendar outline" />
        Joined in {new Date(created_at).getFullYear()}
      </span>
    </Card.Content>
    {company && (
      <Card.Content>
        <span className="login">
          <Icon name="building outline" />
          {company}
        </span>
      </Card.Content>
    )}
    {location && (
      <Card.Content>
        <span className="location">
          <Icon name="marker" />
          {location}
        </span>
      </Card.Content>
    )}
    <Card.Content textAlign="center">
      <Card.Header>Activity</Card.Header>
      {renderActivity({
        followers,
        following,
        public_gists,
        public_repos,
      })}
    </Card.Content>
  </Card>
);

User.propTypes = {
  data: PropTypes.object,
};
User.defaultProps = {
  data: {},
};

export default User;
