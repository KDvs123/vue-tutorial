<template>
<!-- <CreatePostVue/>


   -->
<!--A component can go through 4 phases

creation
mounting
updating
unmounting

-->

<!--beforeCreate(), created()(best place to make any api call) creation-->
<!--beforeMount(), mounted()(best place to access dom elements) mounting-->
<!--beforeUpdate(), updated()(best place to update dom elements) updating-->
<!--beforeUnmount(), unmounted()(best place to clean up resources) unmounting-->
<!--activated() , deactivated() -->

<!-- <ParentVue/> -->

<!--parent cannot mount itself to the dom without knowing what a child component is-->
<!--console.log result
parent beforeCreate()
parent created()
parent beforeMount()
child beforeCreate()
Child Created()
Child beforeMount()
Child Mounted() 
parent Mounted()

-->

<!-- <PostListVue/> -->
<!-- <TemplateRefVue/> -->
<ClickCounterVue />
<HoverCounterVue />


</template>

<script>

// import CreatePostVue from './components/CreatePost.vue'
// import ParentVue from './components/Parent.vue'
// import PostListVue from './components/PostList.vue'
// import TemplateRefVue from './components/TemplateRef.vue'
import ClickCounterVue from './components/ClickCounter.vue'
import HoverCounterVue from './components/HoverCounter.vue'






export default {
  name: 'App',
  components: {
    // PostListVue,
    // CreatePostVue,
    // ParentVue
    // TemplateRefVue,
    ClickCounterVue ,
    HoverCounterVue
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
