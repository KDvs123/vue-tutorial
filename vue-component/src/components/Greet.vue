<template>
  <h2>Hello {{name}} a.k.a {{heroName}}</h2>
</template>

<!--we can bind dynamic values-->

<script>
export default {
    name:'GreetVue',
    props:['name', 'heroName'],
    

}
</script>

<style>

</style>