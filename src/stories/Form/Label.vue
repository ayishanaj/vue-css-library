
<template>
  <v-row  justify="start">  
  <v-col cols="12" sm="12" md="4" xl="4"  class="my-auto" >
  <p  :class="className" >{{label}}</p>
  </v-col>
  </v-row>

</template>

<script>
export default {
  name: "Label",
  props: ["className","label"]
}
</script>

