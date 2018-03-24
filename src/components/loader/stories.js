import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Loader from '../Loader';

storiesOf('Loader', module)
  .add('default', () => <Loader />)
  .add('with text', () => <Loader>Loading user data...</Loader>)
  .add('with size', () => <Loader size={60} />)
  .add('with colors', () => <Loader circleColor="green" spinColor="red" />);
