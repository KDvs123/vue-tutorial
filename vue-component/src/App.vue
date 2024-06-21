<template>
  <!-- <Greet name="Bruce" heroName="Batman"/>
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder Woman"/>

   <Greet :name="name" :heroName="channel"/> -->
   <!-- <ArticleVue  id="my-article" title="Article Title"  :likes="50" :isPublished="true"/>
    -->

   <!--no prop attribute automatically added to the root element-->
    <!--to apply to a specitdic attribute u use v-bind=${attri}-->

    <!-- <ComponentCVue/> -->
    <button @click="showPopup=true">Show Popup</button>
    <PopupVue v-show="showPopup" @close="closePopup"/>
    <h1>App Component Username{{name}}</h1>
  

  <!-- Props are custom attributes for a component-->
  <!--Provide passes data through the component tree without having to pass the props
  through each level
  -->

  <!--added a custom close event-->

</template>

<script>
// import ArticleVue from './components/Article.vue'
// import ComponentCVue from './components/ComponentC.vue'
import PopupVue from './components/Popup.vue'

// import Greet from './components/Greet.vue'




export default {
  
  name: 'App',
  components: {
    // Greet,
    // ArticleVue,
    // ComponentCVue,
    PopupVue
    
    
  },
  data(){
    return{
      name: 'Vihanga',
      channel: 'Chanux Bro',
      showPopup:false

    }
  }, 
  methods:{
    closePopup(name){
      this.showPopup=false
      console.log('Name',name)


    }
  },
  provide(){
    return{
       username:this.name,
    }
    // this inject only to the bottom child element
    //inject doesnt allow u to bind the attributes

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
