<template>
<v-chip class="rounded-lg"  :class="className">{{label}}</v-chip>

</template>

<script>
    export default {
        name:"Chip",
        props:["label","className"]
    }
</script>

