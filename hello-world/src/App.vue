<template>
  <div>{{greet}} {{name}}</div> <!--binding data-->
  <div v-text="channel"></div> <!--Directive-->
  <!--  <div v-text="name">Hello</div> v textwill override element children-->

  

</template>
<!--recommended way is mustash way-->


<script>

export default {
  name: 'App',
  data(){
    return{
      greet:'Byee',
      name:'Vihanga',
      channel:'Chanux Bro'
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
