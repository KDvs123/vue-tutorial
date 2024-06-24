<template>
  <h2>Options -{{ o_firstName }}</h2>
  <h2>Composition - {{c_firstName}} </h2>
   <h2>Greet - {{greet}} </h2>
   <!--for binding to the template we dont need to use .value-->
</template>

<script>
import {ref} from 'vue'
export default {
  name: "DataVue",
  setup() {
    const c_firstName = ref("Clark");
    c_firstName.value='Diana'
    const greet=`Hello ${c_firstName.value}`

    //ref is a function returns an reactive an mutalble object


    return {
      c_firstName,
      greet //when the key is same as value we can use es6 property
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>

<style scoped></style>
