<template>
<!-- <CreatePostVue/>
<PostListVue/>

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

<ParentVue/>

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



  
</template>

<script>
// import CreatePostVue from './components/CreatePost.vue'
import ParentVue from './components/Parent.vue'
// import PostListVue from './components/PostList.vue'




export default {
  name: 'App',
  components: {
    // PostListVue,
    // CreatePostVue,
    ParentVue
    
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
