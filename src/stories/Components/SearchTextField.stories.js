// SearchTextField.stories.js

import SearchTextField from './SearchTextField';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/SearchTextField',
  component: SearchTextField,
};

export const Welcome = () => ({
  components: { SearchTextField },
  template: '<SearchTextField  className="nn-search" placeholder="Search by Name or Tags" />',
});



