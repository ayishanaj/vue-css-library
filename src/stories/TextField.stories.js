// Chip.stories.js

import TextField from './TextField';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/TextField',
  component: TextField,
};

export const Welcome = () => ({
  components: { TextField },
  template: '<TextField  className="nn-search" />',
});



