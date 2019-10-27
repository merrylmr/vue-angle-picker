<template>
  <div id="app">
    <home></home>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import Home from './Home.vue'

  export default {
    name: 'app',
    components: {
//    HelloWorld
      Home
    }
  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  h1 {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
