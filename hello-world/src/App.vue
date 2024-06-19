<template>
  <div>{{ greet }} {{ name }}</div>
  <!--binding data-->

  <!--  <div v-text="name">Hello</div> v textwill override element children-->
  <div v-html="channel"></div>
  <!--you only the content that only trust-->
  <div v-html="hack"></div>
  <h2 v-bind:id="headingID">Heading</h2>
  <button v-bind:disabled="isDiabled">Bind</button>
  <h2 class="underline">Underlined Text</h2>
  <h2 class="underline" v-bind:class="status">Danger</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">Soldout movie</h2>
  <h2 v-bind:class="['new', 'promoted']">Newly Promoted Movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">
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
