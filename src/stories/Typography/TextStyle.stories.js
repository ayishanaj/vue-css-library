// TextStyle.stories.js

import TextStyle from './TextStyle';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Typography/TextStyle',
  component: TextStyle,
};

export const Welcome = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Welcome to Word" className="nn-welcome" />',
});
export const BlueHeading = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Your Bio" className="nn-bio" />',
});
export const LoginSubHeading = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Your Next Gen Smart HR portal" className="nn-login-subheading" />',
});



