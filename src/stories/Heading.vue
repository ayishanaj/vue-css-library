
<template>
  <v-row  justify="start">
   <p  v-if="className === 'nn-welcome'" class=" mb-0 font-weight-thin" :class="className">{{label}}</p>
   <p  v-if="className === 'nn-cardheading'"  class="darkBlue-heading-text lineHeightHeading"  :class="className" >{{label}}</p>
  </v-row>

</template>

<script>
export default {
  name: "Heading",
  props: ["className","label"]
}
</script>

