import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Loader/stories');
}

configure(loadStories, module);
