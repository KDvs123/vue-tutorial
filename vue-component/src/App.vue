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
  <!-- <button @click="showPopup=true">Show Popup</button>
    <PopupVue v-show="showPopup" @close="closePopup"/> -->
  <!-- <h1>App Component Username{{name}}</h1> -->
  <!-- <CardVue >Card Content</CardVue>
    <CardVue ><h2>Card Content</h2></CardVue>
    <CardVue ><img src="https://picsum.photos/200" alt=""></CardVue> -->
  <!-- <CardVue>
      <template v-slot:header>
        <h3>Header</h3>

      </template>
      <template v-slot:default>
       <img src="https://picsum.photos/200" alt="">

      </template>

       <template v-slot:footer>
        <h3>Footer</h3>

      </template>
    </CardVue> -->
  <!-- <NameListVue>
      <template v-slot:default="slotProps">
        {{slotProps.firstName}} {{slotProps.lastName}}

      </template>

    </NameListVue>

    <NameListVue>
      <template v-slot:default="slotProps">
        {{slotProps.lastName}} {{slotProps.firstName}}

      </template>

    </NameListVue>

    
    <NameListVue>
      <template v-slot:default="slotProps">
        {{slotProps.lastName}}

      </template>

    </NameListVue> -->

  <!-- <h4>App Component Text</h4> -->

  <!-- 

    <ChildStylesVue >
      <h4>Childstyles component text</h4>
    </ChildStylesVue> -->
  <!--When using slots the parent components styles are applied and not the child component styles even though the
    content is embedded inside the child component-->

  <!-- Props are custom attributes for a component-->
  <!--Provide passes data through the component tree without having to pass the props
  through each level
  -->

  <!--added a custom close event-->

  <!--In Props child will always be in control of the HTML content and the parent can only pass in different data values-->
  <!--Slots allow you to re-use a component-->
  <!--They allow the parent componentto control the content inside the child content-->
  <!-- Slot allow a parent component to embed any content in a child component including
  HTML elements-->

  <!-- <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>

  <keep-alive>
    <component :is="activeTab"></component>
  </keep-alive>  -->

  <!--prevent re rendering purposes-->
  <teleport to="#portal-root">
  <PortalVue />
    </teleport>
    <!--This takes a specific html div not a standard div-->
    <!--having to deal with parent component css where child component is a model, a pop-up or a tooltip-->


</template>

<script>
import PortalVue from './components/Portal.vue';
// import TabAVue from "./components/TabA.vue";
// import TabBVue from "./components/TabB.vue";
// import TabCVue from "./components/TabC.vue";
// import ChildStylesVue from './components/ChildStyles.vue'
// import NameListVue from './components/NameList.vue'
// import CardVue from './components/Card.vue'

// import InputVue from './components/input.vue'

// import ArticleVue from './components/Article.vue'
// import ComponentCVue from './components/ComponentC.vue'
// import PopupVue from './components/Popup.vue'

// import Greet from './components/Greet.vue'

export default {
  name: "App",
  components: {
    // Greet,
    // ArticleVue,
    // ComponentCVue,
    // PopupVue
    // InputVue
    // CardVue
    // NameListVue
    // ChildStylesVue
    // TabAVue,
    // TabBVue,
    // TabCVue,
    PortalVue 
  },
  data() {
    return {
      name: "",
      activeTab: "TabA",
      // name: 'Vihanga',
      // channel: 'Chanux Bro',
      // showPopup:false
    };
  },
  methods: {
    // closePopup(name){
    //   this.showPopup=false
    //   console.log('Name',name)
    // }
  },
  provide() {
    return {
      username: this.name,
    };
    // this inject only to the bottom child element
    //inject doesnt allow u to bind the attributes
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>
