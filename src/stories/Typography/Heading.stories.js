// Heading.stories.js

import Heading from './Heading';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Typography/Heading',
  component: Heading,
};

export const Login = () => ({
  components: { Heading },
  template: '<Heading  label="Welcome to New World of HR Service" className="nn-heading" />',
});




