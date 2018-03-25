import React, { Component } from 'react';
import { mount } from 'enzyme';

import withToggle from './withToggle';
import { wrap } from 'module';

const withIsOpen = withToggle('isOpen');
const MockComponent = () => <div />;
const render = () => {
  const EnhancedMock = withIsOpen(MockComponent);
  return mount(<EnhancedMock />);
};

describe('withToggle', () => {
  let wrapper;
  let subject;

  beforeEach(() => {
    wrapper = render();
    subject = wrapper.find(MockComponent);
  });

  test('renders the Mock component', () => {
    expect(subject.exists()).toBe(true);
  });

  test('mock component has a isOpen prop', () => {
    expect(subject.props()).toHaveProperty('isOpen');
  });

  test('mock component has a onToggle prop', () => {
    expect(subject.props()).toHaveProperty('onToggle');
  });

  test('mock component isOpen prop is false by default', () => {
    expect(subject.prop('isOpen')).toBe(false);
  });

  test('mock component calls onToggle and wrapper state changes', () => {
    expect(wrapper.state('stateValue')).toBe(false);
    subject.prop('onToggle')();
    expect(wrapper.state('stateValue')).toBe(true);
  });

  test('isOpen prop maps to wrapper state', () => {
    wrapper.setState({ stateValue: true });
    subject = wrapper.find(MockComponent);
    expect(subject.prop('isOpen')).toBe(true);
  });
});
