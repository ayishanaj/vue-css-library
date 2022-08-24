
<template>
  <v-row  justify="start">  
  <v-col cols="12" sm="12" md="4" xl="4"  class="my-auto" >
  <v-text-field solo flat  hide-details  prepend-inner-icon="mdi-magnify"  :class="className" :placeholder="placeholder" ></v-text-field>
  </v-col>
  </v-row>

</template>

<script>
export default {
  name: "SearchTextField",
  props: ["className","placeholder"]
}
</script>

