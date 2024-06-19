<template>
  <div>{{ greet }} {{ name }}</div>
  <!--binding data-->

  <!--  <div v-text="name">Hello</div> v textwill override element children-->
  <div v-html="channel"></div>
  <!--you only the content that only trust-->
  <div v-html="hack"></div>
  <h2 :id="headingID">Heading</h2>
  <button :disabled="isDiabled">Bind</button>
  <h2 class="underline">Underlined Text</h2>
  <h2 class="underline" v-bind:class="status">Danger</h2>
  <h2 :class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 :class="isSoldOut ? 'sold-out' : 'new'">Soldout movie</h2>
  <h2 :class="['new', 'promoted']">Newly Promoted Movie</h2>
  <h2 :class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">
    Array Conditional Movie
  </h2>
  <h2
    v-bind:class="{
      promoted: isPromoted,
      new: !isSoldOut,
      'sold-out': isSoldOut,
    }"
  >
    Object conditional movie
  </h2>
  <h2 v-bind:style="{
    color: heightlightColor,
  }">Inline Style</h2>
  <h2 v-bind:style="{
    fontSize:headerSize + 'px',
    padding:'20px'
  }">Font Size</h2>
  <h2 v-bind:style="headerStyleObject">Font Size</h2>
  <div v-bind:style="[baseStyleObject,succssStyleObject]">Sucess Style</div><!--styles written in the last style object overrides previous style object -->
  <div v-bind:style="[baseStyleObject,dangerStyleObjec]">Danger Style</div>
  
  <!--Conditional Rendering-->
  <h2 v-if="num===0">The number is zero</h2>
  <h2 v-else-if="num<0" >The number is negative</h2>
  <h2 v-else-if="num>0">The number is positive</h2>
  <h2 v-else>Its not a number</h2>

  <!--actes as an invisible div-->
  <template v-if="display">
    <h2>Viswas</h2>
    <h2>Chanux Bro</h2>
    <h2>Vue</h2>

  </template>



  
</template>
<!--recommended way is mustash way-->

<script>
export default {
  name: "App",
  data() {
    return {
      greet: "Byee",
      name: "Vihanga",
      channel: "<b>Chanux Bro<b>",
      hack: `<a href="#" onclick="alert('You have been hacked!')" > Win a price </a>`,
      headingID: "heading",
      isDiabled: true,
      status: "danger",
      isPromoted: true,
      isSoldOut: true,
      heightlightColor:'orange',
      headerSize:50,
      headerStyleObject:{
        fontSize:'50px',
        padding:'20px',
        color:'orange'
      },
      baseStyleObject:{
        fontSize:'50px',
        padding:'10px',
      },
      succssStyleObject:{
        color:'green',
        backgroundColor:'lightgreen',
        border:'1px solid green',
        padding:'20px',

      },dangerStyleObjec:{
        color:'dark-red',
        backgroundColor:'red',
        border:'1px solid darkred'
      },
      num:5,
      display:true
      
    };
  },
};
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

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
