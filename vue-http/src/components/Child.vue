<template>
    <div>
        Child Component

    </div>
</template>

<script>
    export default {
        name:'ChildVue',
        beforeCreate(){
            console.log('child beforeCreate()')
        },
        created(){
            console.log('Child Created()')
        },beforeMount(){
            console.log(' Child beforeMount()')
        },mounted(){
            console.log('Child Mounted() ')
        }, beforeUpdate(){
            console.log('Child beforeUpdate()')
        }, updated(){
            console.log('Child Updated()')
        },beforeUnmount(){
            console.log('Child beforeUnmount()')
        }, unmounted(){
            console.log('Child unmounted')
        }
    }
</script>

<style lang="scss" scoped>

</style>