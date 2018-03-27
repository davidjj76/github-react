import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Loader/stories');
  require('../src/pages/User/stories');
}

configure(loadStories, module);
