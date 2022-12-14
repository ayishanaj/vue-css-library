// Chip.stories.js

import Heading from './Heading.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Typography/Heading',
  component: Heading,
};

export const Welcome = () => ({
  components: { Heading },
  template: '<Heading  label="Welcome to Word" className="nn-welcome" />',
});
export const BlueHeading = () => ({
  components: { Heading },
  template: '<Heading  label="Your Bio" className="nn-bio" />',
});



