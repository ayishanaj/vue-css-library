
<template>
  <v-row  justify="start">
   <p v-if="className === 'nn-welcome'"  :class="className">{{label}}</p>
   <p  v-if="className === 'nn-bio'" :class="className">{{label}}</p>

  </v-row>

</template>

<script>
export default {
  name: "Heading",
  props: ["className","label"]
}
</script>

