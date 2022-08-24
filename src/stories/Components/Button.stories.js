// Button.stories.js

import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Button',
  component: Button,
};

export const Withdraw = () => ({
  components: { Button },
  template: '<Button  label="Withdraw" className="nn-danger" />',
});

export const Round = () => ({
  components: { Button },
  template: '<Button  label="4" className="nn-round" />',
});

export const View = () => ({
  components: { Button },
  template: '<Button  label="VIEW HISTORY" className="nn-history" />',
});

export const Ecard = () => ({
  components: { Button },
  template: '<Button  label="E-CARD" className="nn-ecard" />',
});

export const Reporting = () => ({
  components: { Button },
  template: '<Button  className="nn-reporting" />',
});

export const Submit = () => ({
  components: { Button },
  template: '<Button label="Submit" className="nn-submit" />',
});
export const Yes = () => ({
  components: { Button },
  template: '<Button label="Yes" className="nn-yesbutton" />',
});
export const No = () => ({
  components: { Button },
  template: '<Button label="No" className="nn-nobutton" />',
});
export const Cancel = () => ({
  components: { Button },
  template: '<Button label="Cancel" className="nn-cancelbutton" />',
});
export const Edit = () => ({
  components: { Button },
  template: '<Button label="Edit" className="nn-editbutton" />',
});
export const Approve = () => ({
  components: { Button },
  template: '<Button label="Approve" className="nn-approve" />',
});
export const Reject = () => ({
  components: { Button },
  template: '<Button label="Reject" className="nn-reject" />',
});
export const Reassign = () => ({
  components: { Button },
  template: '<Button label="Reassign" className="nn-reassign" />',
});
export const Asset = () => ({
  components: { Button },
  template: '<Button  className="nn-assetButton" />',
});
export const AssetCount = () => ({
  components: { Button },
  template: '<Button  className="nn-assetCount"  />',
});
export const Medium = () => ({
  components: { Button },
  template: '<Button label="Medium"  className="nn-medium"  />',
});
export const High = () => ({
  components: { Button },
  template: '<Button label="High"  className="nn-high"   />',
});
export const Low = () => ({
  components: { Button },
  template: '<Button label="Low"  className="nn-low"  />',
});
export const Login = () => ({
  components: { Button },
  template: '<Button label="Login"  className="nn-login"  />',
});





