<template>
  <v-row class="mb-3">
    <v-col cols="12" class="pt-0 px-0">
      <v-card :class="className">
        <v-card-title class="pa-0">
          <span>{{label}}</span>
            <StackAlt/>
          <v-spacer></v-spacer>
         </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Card",
  props: ["label", "className"],
};
</script>
