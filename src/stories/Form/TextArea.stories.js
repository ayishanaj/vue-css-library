// TextArea.stories.js

import TextArea from './TextArea';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/TextArea',
  component: TextArea,
};

export const TextAreaInput = () => ({
  components: { TextArea },
  template: '<TextArea placeholder="Bio"  className="nn-textarea" />',
});



