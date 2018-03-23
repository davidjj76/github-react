import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/stories/Loader');
}

configure(loadStories, module);
