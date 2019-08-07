<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import "../node_modules/animate.css/animate.css"

  import City from "./components/city";
  import Login from "./components/login";
  import Person from "./components/Person";
  import UpdateName from "./components/UpdateName";
  import TwoApp from "./components/TwoApp";
export default {
  name: 'App',
  components: {TwoApp, Login, City,Person,UpdateName},

}
</script>

<head>

</head>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
#app {
  width: 100%;
  height: 100%;
}
  html,body{
    width: 100%;
    height: 100%;
  }
</style>
