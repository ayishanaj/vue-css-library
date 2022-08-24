// Dropdown.stories.js

import Dropdown from './Dropdown.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Task = () => ({
  components: { Dropdown },
  template: '<Dropdown   className="nn-taskSelect" />',
});

