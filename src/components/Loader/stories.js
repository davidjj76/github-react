import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';

import Loader from '../Loader';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .add('default', () => <Loader />)
  .add('with text', () => <Loader>Loading user data...</Loader>)
  .add('with size', () => <Loader size={60} />)
  .add('with colors', () => <Loader circleColor="green" spinColor="red" />)
  .add('with knobs', () => {
    const children = text('Label', 'Loading user data...');
    const circleColor = text('Circle color', 'red');
    const size = number('Size', 30);
    const spinColor = text('Spin color', 'green');
    return (
      <Loader circleColor={circleColor} spinColor={spinColor} size={size}>
        {children}
      </Loader>
    );
  });
