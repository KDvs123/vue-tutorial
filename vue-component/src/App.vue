<template>
  <!-- <Greet name="Bruce" heroName="Batman"/>
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder Woman"/>

   <Greet :name="name" :heroName="channel"/> -->
   <ArticleVue title="Article Title"  :likes="50" :isPublished="true"/>
  

  <!--Props are custom attributes for a component-->

</template>

<script>
import ArticleVue from './components/Article.vue'
// import Greet from './components/Greet.vue'



export default {
  
  name: 'App',
  components: {
    // Greet,
    ArticleVue,
    
    
  },
  data(){
    return{
      name: 'Vihanga',
      channel: 'Chanux Bro'

    }
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
