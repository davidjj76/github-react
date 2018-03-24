import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/loader/stories');
}

configure(loadStories, module);
