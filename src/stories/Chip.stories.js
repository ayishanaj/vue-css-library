// Chip.stories.js

import Chip from './Chip.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Chip',
  component: Chip,
};

export const Cancelled = () => ({
  components: { Chip },
  template: '<Chip  label="Cancelled" className="cancelled" />',
});
export const Completed = () => ({
    components: { Chip },
    template: '<Chip  label="Completed" className="completed" />',
  });
  export const Processing = () => ({
    components: { Chip },
    template: '<Chip  label="Processing" className="processing" />',
  });
