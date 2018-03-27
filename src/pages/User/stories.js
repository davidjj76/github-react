import React from 'react';
import '../../styles';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, date } from '@storybook/addon-knobs/react';

import User from './User';

storiesOf('User', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => {
    const avatar_url = text(
      'Avatar url',
      'https://avatars2.githubusercontent.com/u/14313553?v=',
    );
    const company = text('Company', 'Company');
    const created_at = date('Joined', new Date('2012-02-12'));
    const followers = number('Followers', 9);
    const following = number('Following', 20);
    const html_url = text('URL', 'https://github.com/davidjj76');
    const location = text('Location', 'Madrid, Spain');
    const login = text('Username', 'davidjj76');
    const name = text('Name', 'David Jiménez');
    const public_gists = number('Gists', 3);
    const public_repos = number('Repositories', 32);

    return (
      <User
        data={{
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
        }}
      />
    );
  });
