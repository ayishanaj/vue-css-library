
<template>
  <v-row  justify="start">  
  <v-col cols="12" sm="12" md="4" xl="4"  class="my-auto" >
  <v-text-field solo flat dense hide-details  prepend-inner-icon="mdi-magnify" class="rounded-xl" :class="className" placeholder="Search by Name or Tags" ></v-text-field>
  </v-col>
  </v-row>

</template>

<script>
export default {
  name: "TextField",
  props: ["className","label"]
}
</script>

