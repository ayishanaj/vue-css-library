// Label.stories.js

import Label from './Label';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Label',
  component: Label,
};

export const LabelField = () => ({
  components: { Label },
  template: '<Label label="Primary Contact Relation" className="nn-label" />',
});



