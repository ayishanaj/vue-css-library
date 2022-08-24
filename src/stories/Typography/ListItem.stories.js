// ListItemTitle.stories.js

import ListTitle from './ListItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Typography/ListTitle',
  component: ListTitle,
};

export const Name = () => ({
  components: { ListTitle },
  template: '<ListTitle  label="Patrick Obate" className="nn-userName" />',
});
export const Position = () => ({
    components: { ListTitle },
    template: '<ListTitle  label="Software Developer" className="nn-position" />',
  });