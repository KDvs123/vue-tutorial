<template>
    <div>
        <slot></slot>
    </div>

    <!--Scoped attributes ensures a component's CSS will apply only to its own HTML elements-->
     <!--With scoped , the parent compoennt's styles will not leak into child components.However a child component's root node will
     be affected by both the parent's scoped css and child's scoped css-->

</template>

<script>
    export default {
        name: "ChildStyles"
    }
</script>

<style scoped> 

h4{
  color: olivedrab;
  
}

</style>