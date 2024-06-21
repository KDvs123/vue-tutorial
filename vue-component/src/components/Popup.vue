<template>
    <div>
        <h2>This is a popup</h2>
        <button @click="$emit('close','Vishwas')">Close Popup</button>
       
    </div>
</template>
 <!--we are emitting a custom event to the parent component-->

<script>
    export default {
        name: "PopupVue",
        emits:['close']
        //array of events that a component can be emit to its parent component

    }
</script>

<style scoped>

</style>