<template>
  <div>{{ greet }} {{ name }}</div>
  <!--binding data-->

  <!--  <div v-text="name">Hello</div> v textwill override element children-->
  <!-- <div v-html="channel"></div> -->
  <!--you only the content that only trust-->
  <!-- <div v-html="hack"></div>
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
  <div v-bind:style="[baseStyleObject,succssStyleObject]">Sucess Style</div> -->
  <!--styles written in the last style object overrides previous style object -->
  <!-- <div v-bind:style="[baseStyleObject,dangerStyleObjec]">Danger Style</div>
   -->
  <!--Conditional Rendering-->
  <!-- <h2 v-if="num===0">The number is zero</h2>
  <h2 v-else-if="num<0" >The number is negative</h2>
  <h2 v-else-if="num>0">The number is positive</h2>
  <h2 v-else>Its not a number</h2>
 -->


  <!--actes as an invisible div-->
  <!-- <template v-if="display">
    <h2>Viswas</h2>
    <h2>Chanux Bro</h2>
    <h2>Vue</h2>

  </template> -->

  
  <!-- <h2 v-show="showElement">Using v-show</h2> -->
  <!--when show element is false it just hidden if you have an element that's gonna be toggleing this is the effective way-->
  <!-- <h2 v-if="showElement">Using v-if</h2> -->
  <!--when show element is false it just not present at all-->

  <!--list rendering using v-for directive-->

  <!-- <h2 v-for="name in names" :key="name">{{name}}</h2>
  <h2 v-for="(name , index) in names" :key="index">{{index}} {{name}}</h2>
  <h2 v-for="(name , index) in fullNames" :key="index">{{name.first}} {{name.last}}</h2>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{actor.name}}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{movie}}</h3>


  </div> -->

  <!--object-->

  <!-- <h2 v-for="(value,key, index) in myInfo" :key="value">{{index}} {{key}} {{value}} </h2>

  <template v-for="name in names" :key="name">
    <h2>{{name}}</h2>
    <hr/>
  </template> -->

  <!--without keys, vue uses an algorithm that minimizes element movement
  and tries to patch/resume elements ofthe same type in-place
  typical value is id property of object dont use non -primitive values like objects or arrays-->

  <!-- <h2 v-for="name in names" :key="name" v-if="name==='Bruce'">{{name}}</h2> -->

  <!--u shouldnt mix v-if value with v-for because v-if executes first than v-for-->

   <!-- <template v-for="name in names" :key="name" >
      <h2 v-if= "name === 'Bruce'" >{{name}}</h2>
   </template> -->

   
    <!-- <h2>addMethod {{add(2,3,4)}}</h2>
    <h2>addMethod {{add(10,15,20)}}</h2>
    <h2>Multiply method {{multiply(10)}}</h2>
    <h2>{{name1}}</h2>
    <div>
         <button @mouseover="changeName($event) , increment(1, $event)">Change Name</button>
    </div> -->

    <!-- <h2>{{count}}</h2>
    <div>
      <button @click="increment(2, $event)">Increment Button</button>
      <button v-on:click="decrement(2)">Decrement Button</button>
       <button v-on:click="increment(5)">Increment Button</button>
      <button v-on:click="decrement(5)">Decrement Button</button>
    </div> -->


    <!--Form Handling-->
    <div>
      <pre>{{JSON.stringify(formValues,null ,2)}}</pre>
    </div>

    <form action="
    ">

    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formValues.name">
    </div>

    <div>
      <label for="profile">Profile Summary</label>
        <textarea  id="profile" cols="30" rows="10" v-model="formValues.profileSummary"></textarea>

      </div>
    <div>
      <label for="country">Country</label>
      <select name="" id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="Srilanka">Srilanka</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location</label>
      <select name="" id="job-location" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="Srilanka">Srilanka</option>
      </select>
    </div>


    </form>
      
   




   
</template>
<!--recommended way is mustash way-->

<script>
export default {
  name: "App",
  
  data() {
    return {
      formValues:{
        name:'',
        profileSummary:'',
        country:'',
        jobLocation:[]
      }
      // count:0,
      // name1:'Wishwas',
      // greet: "Byee",
      // name: "Vihanga",
      // channel: "<b>Chanux Bro<b>",
      // hack: `<a href="#" onclick="alert('You have been hacked!')" > Win a price </a>`,
      // headingID: "heading",
      // isDiabled: true,
      // status: "danger",
      // isPromoted: true,
      // isSoldOut: true,
      // heightlightColor:'orange',
      // headerSize:50,
      // headerStyleObject:{
      //   fontSize:'50px',
      //   padding:'20px',
      //   color:'orange'
      // },
      // baseStyleObject:{
      //   fontSize:'50px',
      //   padding:'10px',
      // },
      // succssStyleObject:{
      //   color:'green',
      //   backgroundColor:'lightgreen',
      //   border:'1px solid green',
      //   padding:'20px',

      // },dangerStyleObjec:{
      //   color:'dark-red',
      //   backgroundColor:'red',
      //   border:'1px solid darkred'
      // },
      // num:5,
      // display:true,
      // showElement:true,
      // names:['Bruce','Mark','diana'],
      // fullNames:[
      //   {first:'Bruce', last:'Wayne'},
      //   {first:'Clark', last:'Kent'},
      //   {first:'Princess', last:'Diana'},
      // ],
      // actors:[
      //   {name:'Christian Bale' , movies: ['Batman', 'The Prestige']},
      //   {name: 'Di Caprio' , movies: ['Titanic' , 'Inception']}
      // ],

      // myInfo:{
      //   name:'Vihanga',
      //   channel:'VSK',
      //   course:'Vue 3'
      // },

      // baseMultiplier:5

    
      
    };

   
  },
   methods:{

    // add(a,b,c){
    //   return a+b+c
    // },

    // multiply(num){
    //   return num*this.baseMultiplier

    // }

    // ,increment(num){
    //   this.count+=num;
    // }
    // , decrement(num){
    //   this.count-=num
    // },
    // changeName(event){
    //   this.name1='batman'
    //   console.log(event)
    // }



      
  }
};
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

