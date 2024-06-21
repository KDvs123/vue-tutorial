<template>
    <div>
        <h2>This is a popup</h2>
        <input type="text" v-model="name">
        <button @click="$emit('close',name)">Close Popup</button>
       
    </div>
</template>
 <!--we are emitting a custom event to the parent component-->

<script>
    export default {
        name: "PopupVue",
        emits:{
            close:(name)=>{
                if(!name){
                    return false
                }else{
                    return true
                }

            }
        },
        data(){
            return{
                name:''
            }
        }
        //array of events that a component can be emit to its parent component

    }
</script>

<style scoped>

</style>