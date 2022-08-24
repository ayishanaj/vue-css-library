
<template>
    <v-row justify="start">
        <v-col cols="12" sm="12" md="4" xl="4" class="my-auto">
            <v-autocomplete v-model="value" :items="items" :class="className" :placeholder=placeholder></v-autocomplete>
        </v-col>
    </v-row>

</template>

<script>
export default {
    name: "AutoComplete",
    props: ["className", "placeholder"],
      data() {
    return {
    items: ['foo', 'bar', 'fizz', 'buzz'],
      value: null,    }
  },
}
</script>

