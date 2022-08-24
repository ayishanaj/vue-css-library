
<template>
  <v-row justify="start">
    <v-btn v-if="className === 'nn-danger'"  :class="className" color="error">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-round'" fab large class="text-h5 round white--text" elevation="0" :class="className" color="indigo">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-history'" :class="className"   class="rounded-xl" small outlined>{{label}}</v-btn>
    <v-btn v-if="className === 'nn-ecard'" :class="className"  elevation="0" small text >E-Card</v-btn>
    <v-btn v-if="className === 'nn-reporting'" height="50" width="250" :class="className"  class="rounded-xl min-button mx-0 pl-1" outlined></v-btn>
    <v-btn v-if="className === 'nn-submit'" :class="className" class="white--text" elevation="0" small text >{{label}}</v-btn>
    <v-btn v-if="className === 'nn-yesbutton'" :class="className" class="white--text" depressed >{{label}}</v-btn >
    <v-btn  v-if="className === 'nn-nobutton'" :class="className" text >{{label}}</v-btn >
    <v-btn v-if="className === 'nn-cancelbutton'" :class="className"  elevation="'0">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-editbutton'" :class="className"  elevation="'0" outlined>{{label}}</v-btn>
    <v-btn v-if="className === 'nn-approve'" :class="className"  outlined elevation="0">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-reject'" :class="className"  outlined elevation="0">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-reassign'" :class="className"  outlined elevation="0">{{label}}</v-btn>
    <v-row  v-if="className === 'nn-assetButton'" class="mx-0">
    <v-col cols="12" sm="6" md="3">
    <v-btn :class="className"  outlined elevation="0"></v-btn>
    </v-col>
     </v-row>
    <v-btn v-if="className === 'nn-assetCount'" :class="className">400</v-btn>
    <v-btn v-if="className === 'nn-low'" :class="className">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-high'" :class="className">{{label}}</v-btn>
    <v-btn v-if="className === 'nn-medium'" :class="className">{{label}}</v-btn>
    <v-col cols="12" sm="6" md="6" v-if="className === 'nn-login'">
    <v-btn  :class="className" >{{label}}</v-btn>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "Button",
  props: ["className","label"]
}
</script>
<style>


</style>

