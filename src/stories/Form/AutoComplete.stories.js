// AutoComplete.stories.js

import AutoComplete from './AutoComplete';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/AutoComplete',
  component: AutoComplete,
};

export const AutoCompleteInput = () => ({
  components: { AutoComplete },
  template: '<AutoComplete placeholder="Relationship" className="nn-autocomplete" />',
});



