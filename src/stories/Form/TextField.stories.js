// TextField.stories.js

import TextField from './TextField';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/TextField',
  component: TextField,
};

export const TextFieldInput = () => ({
  components: { TextField },
  template: '<TextField placeholder="Mobile Number" className="nn-textinput" />',
});



