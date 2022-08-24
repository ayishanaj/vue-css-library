
<template>
  <v-row  justify="start">  
  <v-col cols="12" sm="12" md="4" xl="4"  class="my-auto" >
   <v-text-field :class="className" :placeholder=placeholder></v-text-field>
  </v-col>
  </v-row>

</template>

<script>
export default {
  name: "TextField",
  props: ["className","placeholder"]
}
</script>

