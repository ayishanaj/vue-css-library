
<template>
  <v-row  justify="start">
   <h1 :class="className">{{label}}</h1>
  </v-row>

</template>

<script>
export default {
  name: "Heading",
  props: ["className","label"]
}
</script>

