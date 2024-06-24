<template>
    <div>
        <button @click="incrementCount">Clicked {{count}}</button>

    </div>
</template>

<script>
import CounterMixin from '../mixins/counter'
    export default {
        name:'ClickCounter',
        mixins: [CounterMixin]
    }
</script>

<style lang="scss" scoped>

</style>