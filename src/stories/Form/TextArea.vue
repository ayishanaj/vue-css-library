
<template>
  <v-row  justify="start">  
  <v-col cols="12" sm="12" md="4" xl="4"  class="my-auto" >
  <v-textarea :class="className" :placeholder=placeholder></v-textarea>
  </v-col>
  </v-row>

</template>

<script>
export default {
  name: "TextArea",
  props: ["className","placeholder"]
}
</script>

