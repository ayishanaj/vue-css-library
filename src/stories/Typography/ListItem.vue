
<template>
    <v-row justify="start">
        <v-list-item-content >
            <v-list-item-title :class="className"> {{label}}</v-list-item-title>
        </v-list-item-content>
    </v-row>

</template>

<script>
export default {
    name: "ListTitle",
    props: ["className", "label"]
}
</script>