// Chip.stories.js

import Chip from './Chip.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Chip',
  component: Chip,
};

export const Cancelled = () => ({
  components: { Chip },
  template: '<Chip  label="Cancelled" className="nn-cancelled" />',
});
export const Completed = () => ({
    components: { Chip },
    template: '<Chip  label="Completed" className="nn-completed" />',
  });
  export const Processing = () => ({
    components: { Chip },
    template: '<Chip  label="Processing" className="nn-processing" />',
  });
  export const Active = () => ({
    components: { Chip },
    template: '<Chip  label="active" className="nn-active" />',
  });
