<template>
<v-chip  :class="className">{{label}}</v-chip>
</template>

<script>
    export default {
        name:"Chip",
        props:["label","className"]
    }
</script>

