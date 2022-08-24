<template>
  <v-row v-if="className === 'nn-newsCard' || className === 'nn-eventsCard'" class="mb-3">
    <v-col cols="12" md="4" lg="3" xl="3" class="pt-0 px-0">
      <v-card :class="className">
        <v-card-title class="pa-0">
          <span>{{label}}</span>
          <StackAlt />
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else-if="className === 'nn-swiperCard' || className === 'nn-swiperSelectedCard'" class="mb-3">
    <v-card :class="className">
      <v-row style="height:100%" width="100%" align="center" justify="center" class="">
      </v-row>
    </v-card>
  </v-row>

  <v-row v-else class="mb-3">
    <v-col cols="12" class="pt-0 px-0">
      <v-card :class="className">
        <v-card-title class="pa-0">
          <span>{{label}}</span>
          <StackAlt />
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
