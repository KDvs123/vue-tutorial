<template>
    <div>
        <h2 @mouseover="incrementCount">Hovered {{count}} times</h2>

    </div>
</template>

<script>
import CounterMinxin from '../mixins/counter'
    export default {
        name:'HoverCounter',
        mixins: [CounterMinxin]
    }
</script>

<style  scoped>

</style>