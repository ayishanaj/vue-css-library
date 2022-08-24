// Chip.stories.js

import Card from './Card.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Card',
  component: Card,
};

export const Profile = () => ({
  components: { Card },
  template: '<Card   className="nn-infoCard" label="Personal Information" />',
});
export const Support = () => ({
  components: { Card },
  template: '<Card   className="nn-supportCard"  />',
});
export const Assets = () => ({
  components: { Card },
  template: '<Card   className="nn-assetCard"  />',
});
export const Total = () => ({
  components: { Card },
  template: '<Card   className="nn-totalCard"  />',
});
export const TeamCentral = () => ({
  components: { Card },
  template: '<Card   className="nn-teamCentral"  />',
});

export const Login = () => ({
  components: { Card },
  template: '<Card   className="nn-loginCard"  />',
});
export const UpcomingEvent = () => ({
  components: { Card },
  template: '<Card   className="nn-eventsCard"  />',
});
export const News = () => ({
  components: { Card },
  template: '<Card   className="nn-newsCard"  />',
});
export const Swiper = () => ({
  components: { Card },
  template: '<Card  className="nn-swiperCard"  />',
});
export const SwiperSelected = () => ({
  components: { Card },
  template: '<Card className="nn-swiperSelectedCard"  />',
});



