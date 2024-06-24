<template>
  <div>
    Parent Component
    <button @click="showChild = !showChild">Toggle Child</button>
    <ChildVue v-if="showChild" />
  </div>
</template>

<script>
import ChildVue from "./Child.vue";

export default {
  name: "ParentVue",
  components: {
    ChildVue,
  },
  data() {
    return {
      showChild: true,
      beforeCreate() {
        console.log("Parent beforeCreate()");
      },
      created() {
        console.log("Parent Created()");
      },
      beforeMount() {
        console.log(" Parent beforeMount()");
      },
      mounted() {
        console.log("Parent Mounted() ");
      },
      beforeUpdate() {
        console.log("Parent beforeUpdate()");
      },
      updated() {
        console.log("Parent Updated()");
      },
      beforeUnmount() {
        console.log("Parent beforeUnmount()");
      },
      unmounted() {
        console.log("Parent unmounted");
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
