
<template>
  <v-row  justify="start">
   <p :class="className">{{label}}</p>
  </v-row>

</template>

<script>
export default {
  name: "TextStyle",
  props: ["className","label"]
}
</script>

