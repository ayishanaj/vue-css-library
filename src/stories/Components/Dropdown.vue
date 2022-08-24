<template>
  <v-row justify="start">
    <v-col cols="12" md="2" class="pa-0">
    <v-select  :items="items" outlined   :class="className" v-model="value"></v-select>
    </v-col>
    </v-row>

</template>

<script>
export default {
    name: "Dropdown",
    props: ["className"],
    data() {
        return {
            items: ['foo', 'bar', 'fizz', 'buzz'],
            value: "foo",
        }
    },
}
</script>