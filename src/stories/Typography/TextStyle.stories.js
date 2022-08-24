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
export const Greeting = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Good Afternoon" className="nn-greet" />',
});
export const TotalDays = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Total days taken in 2022" className="nn-totalText" />',
});
export const CardHeading = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Monthly Attendance Log" className="nn-cardHeading" />',
});
export const ClockInText = () => ({
  components: { TextStyle },
  template: '<TextStyle  label="Clock In Time" className="nn-clockIn" />',
});



