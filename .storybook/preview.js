import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook';
import "../variable.scss";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

 addDecorator(() => ({
 vuetify,
 template: `
     <v-app>
     <v-main>
         <v-container fluid >
         <story/>
         </v-container>
     </v-main>
     </v-app>
     `,
 }));